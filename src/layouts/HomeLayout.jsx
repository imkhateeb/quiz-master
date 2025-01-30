import { Route, Routes } from "react-router-dom";
import { heroImg } from "../assets/images";
import { Home } from "../pages";

const HomeLayout = () => {
  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-cover bg-center overflow-y-auto"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default HomeLayout;
