import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../shared";

const QuizButton = ({
  disabled,
  className,
  onClick,
  isLastQuestion,
  quizResponse,
}) => {
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(quizResponse);
  return (
    <Button
      className={className}
      onClick={
        isLastQuestion
          ? navigate(
              `/result?name=${name}&response=${JSON.stringify(quizResponse)}`
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
