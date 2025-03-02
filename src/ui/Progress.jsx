import { useQuiz } from "../context/context";
import Button from "./Button";

function Progress({ children }) {
  const { dispatch, status, index, points } = useQuiz();
  function handleStart() {
    if (dispatch) {
      dispatch({ type: "start" });
    }
  }
  return (
    <div className="flex h-2/12 w-full flex-col items-start bg-stone-800 text-stone-300 shadow-stone-100 drop-shadow-lg">
      <div className="flex w-full flex-col items-start justify-between p-2 sm:mx-25 sm:w-2/3 sm:py-10">
        <div className="flex w-full items-center justify-between px-2 sm:mb-5">
          <p>
            سوال شماره : <span>{index + 1}</span>
          </p>
          {status === "ready" && <Button onClick={handleStart}>شروع</Button>}
        </div>
        <div className="mt-3 w-full items-center space-y-3 sm:flex sm:justify-between sm:space-y-0">
          <p className="ml-4">
            امتیازات کسب شده: <span>{points}</span>
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Progress;
