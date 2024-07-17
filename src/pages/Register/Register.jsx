import { Link, useNavigate } from "react-router-dom";
import LoginBanner from "../../components/LoginBanner";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";
import { FaUserCheck } from "react-icons/fa6";
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
    const acType = form.acType.value;

    if (pin.length !== 5) {
      return setError("PIN should be 5 character");
    }

    const user = {
      name,
      email,
      number,
      pin,
      acType,
    };

    try {
      const res = await axios.post("http://localhost:3000/register", user);
      // console.log(res.data);
      if (res.data.insertedId) {
        console.log("user create successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setError("something wrong");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="flex justify-center items-center mb-6">
          <LoginBanner />
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-3 flex items-center">
            <label htmlFor="name">
              <FaRegUser className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="outline-0 border-b border-gray-800 w-full"
              required
            />
          </div>
          <div className="mb-3 flex items-center">
            <label htmlFor="email">
              <MdOutlineEmail className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
              className="outline-0 border-b border-gray-800 w-full"
              required
            />
          </div>
          <div className="mb-3 flex items-center">
            <label htmlFor="number">
              <FaPhoneAlt className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="your mobile number"
              className="outline-0 border-b border-gray-800 w-full "
              required
            />
          </div>
          <div className="flex items-center mb-3">
            <FaUserCheck className=" me-2 text-[#1ba557]" />
            <select
              defaultValue={"select one"}
              name="acType"
              className="outline-0 border-b border-gray-800 w-full "
            >
              <option disabled value={"select one"}>
                Select One
              </option>
              <option value="user">User</option>
              <option value="agent">Agent</option>
            </select>
          </div>

          <div className="flex items-center">
            <label htmlFor="pin">
              <MdLock className="inline me-2 text-[#1ba557]" />
            </label>
            <input
              type="password"
              name="pin"
              id="pin"
              placeholder="PIN"
              className="outline-0 border-b border-gray-800 w-full"
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
