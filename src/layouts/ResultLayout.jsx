import { Link, Route, Routes } from "react-router-dom";
import CreamyBackground from "../wrappers/CreamyBackground";
import { Result, ResultDetail } from "../pages";

const ResultLayout = () => {
  return (
    <CreamyBackground>
      <div className="w-screen min-h-screen no-scrollbar">
        <div className="w-full flex justify-center">
          <Link
            to="/"
            className="text-lg font-bold text-center text-greenish py-2 px-4 rounded-b-lg border-b-4 border-greenish"
          >
            Home
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Result />} />
          <Route path="/answers" element={<ResultDetail />} />
        </Routes>
      </div>
    </CreamyBackground>
  );
};

export default ResultLayout;
