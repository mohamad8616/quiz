import Progress from "./Progress";
import ProgressBar from "./ProgressBar";
import Quiz from "./quiz";
function AppLayout() {
  return (
    <section className="flex h-auto flex-col justify-between space-y-10">
      <Progress>
        <ProgressBar />
      </Progress>
      <Quiz></Quiz>
    </section>
  );
}

export default AppLayout;
