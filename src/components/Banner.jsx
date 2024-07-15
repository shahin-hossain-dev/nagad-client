const Banner = () => {
  return (
    <div className="banner flex justify-center items-center">
      <img
        src="/src/assets/logo.png"
        className="bg-white rounded-md absolute top-3 hidden lg:flex w-[150px] left-3"
        alt=""
      />
      <h2 className="text-2xl md:text-3xl text-center  lg:text-5xl text-white font-bold">
        নগদ ইসলামিক
      </h2>
    </div>
  );
};

export default Banner;
