import { FaUsers } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Banner from "../../../components/Banner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const Admin = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await axiosSecure.get("/users");
      return data.data;
    },
  });
  console.log(users);
  return (
    <div>
      <Banner />
      <div className="mt-12 mx-24">
        <div className=" ">
          {/* table */}
          <div className="overflow-x-auto mt-12">
            <table className="table border">
              {/* head */}
              <thead>
                <tr className="text-neutral bg-neutral-300">
                  <th>User Name</th>
                  <th>Number</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users?.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.number}</td>
                    <td>
                      {" "}
                      {user.acType.replace(
                        user.acType[0],
                        user.acType[0].toUpperCase()
                      )}
                    </td>
                    <td>
                      <button
                        className={` px-2 py-1 rounded-md ${
                          user.status === "approved"
                            ? "bg-green-100"
                            : "bg-red-100 "
                        }`}
                      >
                        {user.status === "approved" ? "Approved" : "Pending"}
                      </button>
                    </td>
                    <td>
                      <div className="flex gap-3">
                        <button
                          disabled={
                            user.paymentStatus ||
                            user.confirmationStatus === "confirmed"
                          }
                          className="disabled:text-gray-500 text-error"
                        >
                          <FaRegTrashCan
                            className={`text-2xl   hover:rotate-180 duration-300 hover:duration-300`}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
