import LoginBanner from "../../components/LoginBanner";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

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
            <label htmlFor="number">
              <FaPhoneAlt className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Mobile Number"
              className="outline-0 border-b border-gray-800 "
            />
          </div>

          <div>
            <label htmlFor="password">
              <MdLock className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="password"
              name="password"
              id="number"
              placeholder="PIN"
              className="outline-0 border-b border-gray-800 "
            />
          </div>
          <input
            type="submit"
            value="Login"
            className=" px-2 py-1 border border-[#1ba557] w-full rounded-2xl mt-3"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
