import { BsSend } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="mt-12 mx-24">
      <div>
        <div>
          <h3 className="text-2xl font-semibold">Manage Users</h3>
          <div className="flex gap-10 mt-12 flex-wrap">
            <Link to={"/user-approval"}>
              <div className="">
                <div className="bg-[#1ba557] p-3 rounded-lg  flex justify-center items-center w-[100px] h-[100px]">
                  <FaUsers className="text-6xl  text-white" />
                </div>
                <h4 className="text-center font-medium">Approval</h4>
              </div>
            </Link>
            <div className="">
              <div className="bg-[#1ba557] p-3 rounded-lg  flex justify-center items-center w-[100px] h-[100px]">
                <TfiStatsUp className="text-6xl  text-white" />
              </div>
              <h4 className="text-center font-medium">Statistics</h4>
            </div>
          </div>
        </div>
      </div>
      {/* user services */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold">Services</h3>
        <div className="flex gap-5 mt-12">
          <div className="">
            <div className="bg-[#1ba557] p-3 rounded-lg  flex justify-center items-center w-[100px] h-[100px]">
              <BsSend className="text-6xl  text-white" />
            </div>
            <h4 className="text-center font-medium">Send Money</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
