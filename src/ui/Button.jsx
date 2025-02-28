function Button({
  type,
  children,
  onClick,
  id,
  correctOption,
  selectedOption,
  setSelectedOption,
}) {
  const base =
    "flex cursor-pointer items-center text-sm justify-center rounded-full bg-orange-600 py-1 px-2  sm:px-6 sm:py-1.5 sm:text-xl text-orange-50 duration-300 hover:bg-orange-500";
  const option =
    selectedOption === null
      ? "my-1 w-60 cursor-pointer rounded-full bg-blue-900 px-3 text-center text-blue-50 outline-0 duration-200 hover:bg-blue-600 focus:bg-blue-600 active:pr-20 sm:w-60 sm:px-7 sm:py-2"
      : id === correctOption
        ? "my-1 w-60 cursor-pointer rounded-full bg-green-700 px-3 text-center text-blue-50 outline-0 duration-200 active:pr-20 sm:w-60 sm:px-7 sm:py-2 disabled:cursor-not-allowed"
        : "my-1 w-60 cursor-pointer rounded-full bg-red-600 px-3 text-center text-blue-50 outline-0 duration-200 active:pr-20 sm:w-60 sm:px-7 sm:py-2 disabled:cursor-not-allowed";

  if (type === "option")
    return (
      <button
        className={option}
        onClick={() => setSelectedOption(id)}
        id={id}
        disabled={selectedOption !== null}
      >
        <p className="text-sm disabled:cursor-not-allowed">{children}</p>
      </button>
    );
  return (
    <button onClick={onClick} className={base}>
      <span className="pb-1">{children}</span>
    </button>
  );
}

export default Button;
