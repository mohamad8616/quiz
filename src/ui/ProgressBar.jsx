function ProgressBar() {
  return (
    <div className="mt-10 h-4 w-8/12 self-center rounded-full bg-gray-200">
      <div
        className="h-4 rounded-full bg-blue-600 transition-all duration-500"
        style={{ width: "10%" }} // Adjust the width as needed
      ></div>
    </div>
  );
}

export default ProgressBar;
