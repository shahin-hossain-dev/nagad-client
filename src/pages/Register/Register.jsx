import { Link, useNavigate } from "react-router-dom";
import LoginBanner from "../../components/LoginBanner";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";
const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const pin = form.pin.value;

    if (pin.length !== 5) {
      return setError("PIN should be 5 character");
    }

    const user = {
      name,
      email,
      number,
      pin,
    };

    try {
      const res = await axios.post("http://localhost:3000/register", user);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="flex justify-center items-center mb-6">
          <LoginBanner />
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="name">
              <FaRegUser className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="outline-0 border-b border-gray-800 "
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <MdOutlineEmail className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
              className="outline-0 border-b border-gray-800 "
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number">
              <FaPhoneAlt className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="your mobile number"
              className="outline-0 border-b border-gray-800 "
              required
            />
          </div>

          <div>
            <label htmlFor="pin">
              <MdLock className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="password"
              name="pin"
              id="pin"
              placeholder="PIN"
              className="outline-0 border-b border-gray-800 "
              required
            />
          </div>
          <input
            type="submit"
            value="Register"
            className=" px-2 py-1 border active:bg-[#1ba557] active:scale-95 duration-200 active:text-white border-[#1ba557] w-full rounded-2xl mt-3"
          />

          {error && <p className="text-red-600">{error}</p>}
          <p className="py-3">
            <small>
              Already have an account. Please{" "}
              <Link to="/login" className="link ">
                Login
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
