import { Link } from "react-router-dom";
import { Button } from "../../shared";

const CongratsMessage = ({ name, result }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <span className="text-5xl max-md:text-4xl max-sm:text-3xl font-poppins font-bold">
            Congratulations! {name}🎉
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-2xl max-md:text-xl max-sm:text-lg font-poppins font-medium">
            You have successfully completed the quiz.
          </span>
        </div>
      </div>

      <div className="flex gap-4 flex-col">
        <div className="flex gap-2 items-center text-xl font-dmSans font-semibold">
          ✅ {result?.correct || 0} Correct Answers
        </div>
        <div className="flex gap-2 items-center text-xl font-dmSans font-semibold">
          😔 {result?.incorrect || 0} Incorrect Answers
        </div>
      </div>

      <Link
        to={`/result/answers?name=${name}&response=${JSON.stringify(result)}`}
      >
        <Button className="py-3 text-xl">Check Detailed Answers</Button>
      </Link>
    </div>
  );
};

export default CongratsMessage;
