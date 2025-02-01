import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { HomeLayout, QuizLayout, ResultLayout } from "./layouts";
import { NotFound } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <div className="no-scrollbar">
        <Routes>
          <Route path="/*" element={<HomeLayout />} />
          <Route path="/quiz/*" element={<QuizLayout />} />
          <Route path="/result/*" element={<ResultLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
