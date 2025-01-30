import Button from "../components/shared/Button";

const Home = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-40">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="text-4xl flex font-bold font-poppins">
            <span className="py-1.5 px-3 bg-greenish rounded-lg text-white">
              Quiz
            </span>
            <span className="py-1.5 px-3 text-white">Master</span>
          </div>

          <div className="h-[5px] rounded-lg bg-gradient-to-r from-greeny w-[300px] to-greeny/10" />

          <div className="w-[90%] md:w-[80%] lg:w-[70%]">
            <p className="text-lg text-gray-800 font-semibold font-dmSans">
              QuizMaster is an engaging web-based quiz application that
              integrates gamification elements to enhance the quiz-taking
              experience. The application fetches quiz data from an API,
              presents it through an intuitive UI, and rewards users with points
              and achievements for their progress.
            </p>
          </div>
        </div>
        <div>
          <Button className="py-4 px-20 text-xl rounded-xl">Start Quiz</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
