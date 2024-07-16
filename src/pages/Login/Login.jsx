import { useState } from "react";
import LoginBanner from "../../components/LoginBanner";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const userId = form.userId.value;
    const pin = form.pin.value;

    if (pin.length !== 5) {
      return setError("PIN should be 5 character");
    }

    const user = {
      userId,
      pin,
    };

    navigate("/");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="flex justify-center items-center mb-6">
          <LoginBanner />
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="userId">
              <FaPhoneAlt className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="text"
              name="userId"
              id="userId"
              placeholder="mobile or email"
              className="outline-0 border-b border-gray-800 "
              required
            />
          </div>

          <div>
            <label htmlFor="password">
              <MdLock className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="password"
              name="pin"
              id="number"
              placeholder="PIN"
              className="outline-0 border-b border-gray-800 "
              required
            />
          </div>
          <input
            type="submit"
            value="Login"
            className=" px-2 py-1 border active:bg-[#1ba557] active:scale-95 duration-200 active:text-white border-[#1ba557] w-full rounded-2xl mt-3"
          />
          {error && <p className="text-red-600">{error}</p>}
          <p className="py-3">
            <small>
              Don&apos;t have any account. Please{" "}
              <Link to="/register" className="link ">
                Register
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
