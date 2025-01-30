import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { HomeLayout, QuizLayout } from "./layouts";
import { NotFound } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeLayout />} />
        <Route path="/quiz/*" element={<QuizLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
