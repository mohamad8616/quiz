import { useQuiz } from "../context/context";
import Button from "./Button";

function Progress({ children }) {
  const { dispatch, status, index } = useQuiz();
  function handleStart() {
    if (dispatch) {
      dispatch({ type: "start" });
    }
  }
  return (
    <div className="mx-7 h-2/12 w-auto">
      <div className="flex items-center justify-between px-2">
        <p>
          سوال شماره : <span>1</span>
        </p>
        {status === "ready" && <Button onClick={handleStart}>شروع</Button>}
      </div>
      {children}

      <p className="mt-2">
        امتیازات کسب شده: <span>0</span>
      </p>
    </div>
  );
}

export default Progress;
