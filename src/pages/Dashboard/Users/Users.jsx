import { BsSend } from "react-icons/bs";

const Users = () => {
  return (
    <div className="mt-12 mx-24">
      <div>
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

export default Users;
