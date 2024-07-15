import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2>This is Main Page</h2>
      <Outlet />
    </div>
  );
};

export default Main;
