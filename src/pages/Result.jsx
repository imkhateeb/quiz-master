import { useLocation } from "react-router-dom";
import { CongratsMessage, ResultConfetti } from "../components/features/result";

const Result = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const nameParam = query.get("name");
  const responseParam = JSON.parse(query.get("response"));

  if (!nameParam || !responseParam) {
    window.location.href = "/";
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[70vh]">
      <ResultConfetti />
      <CongratsMessage name={nameParam} result={responseParam} />
    </div>
  );
};

export default Result;
