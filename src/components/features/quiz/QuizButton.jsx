import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../shared";
import getResult from "../../../utils/getResult";

const QuizButton = ({
  disabled,
  className,
  onClick,
  isLastQuestion,
  quizResponse,
}) => {
  const navigate = useNavigate();
  const { name } = useParams();

  const result = quizResponse ? getResult(quizResponse) : {};

  return (
    <Button
      className={className}
      onClick={
        isLastQuestion
          ? () =>
              navigate(
                `/result?name=${name}&response=${JSON.stringify(result)}`
              )
          : onClick
      }
      disabled={disabled}
    >
      {isLastQuestion ? "Submit!" : "Continue"}
    </Button>
  );
};

export default QuizButton;
