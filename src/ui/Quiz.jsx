import { useContext, useState } from "react";
import { useQuiz } from "../context/context";
import Button from "./Button";

function Quiz() {
  const { status, questions, index, dispatch } = useQuiz();
  const [selectedOption, setSelectedOption] = useState(null);

  const currQuestion = questions[index];
  const question = currQuestion.question;
  const options = currQuestion.options;
  const correctOption = currQuestion.correctOption;

  function handleOptionSelect(id) {
    setSelectedOption(id);
  }
  return (
    <div className="mx-auto my-4 flex h-80 w-10/12 flex-col items-center justify-between p-5 text-start">
      {status === "ready" && (
        <ul className="w-full space-y-3 p-5">
          <li className="mb-9 text-xl font-bold">
            چند نکته در مورد شروع آزمون:
          </li>
          <li className="list-disc p-2 text-xl">
            پس از شروع، 7 دقیقه وقت دارید تا به سوالات پاسخ دهید
          </li>
          <li className="list-disc p-2 text-xl">
            در صورتی گه بیش از 5 پاسخ نادرست داشته باشید، در آزمون مردود می شوید
          </li>
        </ul>
      )}
      {status === "start" && (
        <main className="">
          <h1 className="mb-1 px-2 text-sm font-semibold sm:mb-6 sm:text-xl">
            {question}
          </h1>
          <div className="mt-16 grid gap-x-20 gap-y-8 sm:grid-cols-2">
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
          <button onClick={() => setSelectedOption(1)}>بعدی</button>
        </main>
      )}
    </div>
  );
}

export default Quiz;
