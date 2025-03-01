import Progress from "./Progress";
import ProgressBar from "./ProgressBar";
import Quiz from "./quiz";
function AppLayout() {
  return (
    <section className="flex h-auto flex-col justify-around space-y-6 rounded-xl bg-stone-800 p-2 sm:space-y-3 sm:p-4">
      <Progress>
        <ProgressBar />
      </Progress>
      <Quiz></Quiz>
    </section>
  );
}

export default AppLayout;
