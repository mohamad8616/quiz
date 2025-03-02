import { useQuiz } from "../context/context";

function ProgressBar() {
  const { index, questions } = useQuiz();
  const percent = (Number(index) / Number(questions.length - 1)) * 100;
  return (
    <div className="h-4 w-full self-center rounded-full bg-gray-200 sm:w-8/12">
      <div
        className="h-4 rounded-full bg-fuchsia-500 transition-all duration-500"
        style={{ width: `${percent}%` }} // Adjust the width as needed
      ></div>
    </div>
  );
}

export default ProgressBar;
