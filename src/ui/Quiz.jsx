import { useState } from "react";
import { useQuiz } from "../context/context";
import Button from "./Button";

function Quiz() {
  const { status, questions, index, points, dispatch, highScore } = useQuiz();
  const [selectedOption, setSelectedOption] = useState(null);

  const currQuestion = questions[index];
  const question = currQuestion.question;
  const options = currQuestion.options;
  const correctOption = currQuestion.correctOption;

  function handleOptionSelect(id) {
    setSelectedOption(id);
  }
  function handleNextButton() {
    selectedOption === correctOption
      ? dispatch({ type: "next", payload: points + currQuestion.points })
      : dispatch({ type: "next", payload: points });
    setSelectedOption(null);
  }
  function handleFinishButton() {
    dispatch({
      type: "finish",
      payload: points < highScore ? highScore : points,
    });
    setSelectedOption(null);

    localStorage.setItem("highScore", points < highScore ? highScore : points);
  }
  function handleResetButton() {
    dispatch({ type: "reset" });
    setSelectedOption(null);
  }
  return (
    <div className="8-90 drop-shadow-3xl mx-auto my-4 flex w-10/12 flex-col items-center justify-between rounded-2xl border-3 border-stone-400 p-4 text-start text-stone-300 shadow-amber-100 sm:h-80">
      {status === "ready" && (
        <ul className="w-full space-y-3 p-1 sm:p-5">
          <li className="mb-9 font-bold sm:text-xl">
            چند نکته در مورد شروع آزمون:
          </li>
          <li className="list-disc sm:p-2 sm:text-xl">
            پس از شروع، 7 دقیقه وقت دارید تا به سوالات پاسخ دهید
          </li>
          <li className="list-disc sm:p-2 sm:text-xl">
            در صورتی که زیر 50 امتیاز داشته باشید، مردود می شوید.
          </li>
        </ul>
      )}
      {status === "start" && (
        <main className="">
          <div className="items-center justify-between sm:flex sm:w-full sm:gap-6">
            <h1 className="mb-1 px-2 text-sm font-semibold sm:mb-6 sm:text-base">
              {question}
            </h1>
            {selectedOption !== null && (
              <Button
                onClick={
                  index < questions.length - 1
                    ? handleNextButton
                    : handleFinishButton
                }
                type="next"
              >
                {index < questions.length - 1 ? "بعدی" : "تمام"}
              </Button>
            )}
          </div>
          <div className="mt-5 grid gap-y-3 sm:mt-10 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-5 lg:gap-y-7">
            {options.map((option, idx) => (
              <Button
                type="option"
                key={idx}
                id={idx}
                // onClick={}
                selectedOption={selectedOption}
                correctOption={correctOption}
                setSelectedOption={setSelectedOption}
                onClick={handleOptionSelect}
              >
                {option}
              </Button>
            ))}
          </div>
        </main>
      )}
      {status === "finished" && (
        <main className="my-auto flex h-full w-8/12 flex-col justify-around text-start">
          <div className="flex justify-around">
            {" "}
            <p className="text-sm font-semibold sm:text-base">
              تعداد امتیاز کسب شده: <span>{points}</span>
            </p>
            <p className="text-sm font-semibold sm:text-base">
              نتیجه آزمون:{" "}
              <span>{points >= 80 ? "قبول شدید" : "مردود شدید"}</span>
            </p>
          </div>
          <Button onClick={handleResetButton}>شروع دوباره</Button>
        </main>
      )}
    </div>
  );
}

export default Quiz;
