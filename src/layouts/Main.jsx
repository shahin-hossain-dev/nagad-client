import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";

const Main = () => {
  return (
    <div>
      <Banner />
      <Outlet />
    </div>
  );
};

export default Main;
