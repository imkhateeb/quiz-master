import { Route, Routes } from "react-router-dom";
import CreamyBackground from "../wrappers/CreamyBackground";
import { Quiz, QuizHome } from "../pages";

const QuizLayout = () => {
  return (
    <CreamyBackground>
      <div className="w-screen h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={<QuizHome />} />
          <Route path="/:name" element={<Quiz />} />
        </Routes>
      </div>
    </CreamyBackground>
  );
};

export default QuizLayout;
