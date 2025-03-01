import { useQuiz } from "../context/context";

function Header() {
  const { questions, highScore } = useQuiz();
  const userHighScore = localStorage.getItem("highScore");

  return (
    <header className="h-auto rounded-xl bg-stone-500 px-7 py-7 text-stone-50">
      <div className="flex flex-col items-center justify-between gap-4 space-y-2 divide-y divide-blue-400 text-start sm:flex-row sm:divide-x sm:divide-y-0">
        <section className="flex w-full items-center justify-between gap-3 pb-3 text-start text-sm sm:w-1/2 sm:px-2 sm:text-base">
          <span className="font-semibold">
            آزمون سنجش اطلاعات عمومی درباره توسعه وب
          </span>
          <img
            alt="quiz"
            src="../../public/image/quiz.png"
            className="ml-2 w-10 rounded-2xl sm:w-20"
          />
        </section>
        <section className="w-full space-y-6 text-start text-sm sm:w-1/2 sm:px-4 sm:text-start">
          <p>
            تعداد سوالات :{" "}
            <span className="font-semibold">{questions.length} </span>
          </p>{" "}
          <p>
            بالاترین امتیاز کسب شده{" "}
            <span className="font-semibold">
              {userHighScore ? userHighScore : highScore}{" "}
            </span>
          </p>
        </section>
      </div>
    </header>
  );
}

export default Header;
