import Header from "./ui/Header";
import AppLayout from "./ui/appLayout";
import Progress from "./ui/Progress";
import ProgressBar from "./ui/ProgressBar";

function App() {
  return (
    <main className="mx-auto h-screen max-w-10/12 space-y-3 bg-gray-50 text-slate-800">
      <Header />

      <AppLayout />
    </main>
  );
}

export default App;
