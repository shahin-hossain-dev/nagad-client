import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img src="/src/assets/logo.png" alt="" />
      </div>
    );
  }
  return (
    <div>
      <Banner />
      <Outlet />
    </div>
  );
};

export default Main;
