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
    "flex cursor-pointer items-center text-sm justify-center rounded-full bg-orange-600 py-1 px-2  sm:px-6 sm:py-1.5 sm:text-1xl text-orange-50 duration-300 hover:bg-orange-500";
  const option =
    selectedOption === null
      ? "my-2 sm:my-1 lg:py-3  lg:w-60 xl:w-60 cursor-pointer rounded-full bg-fuchsia-500 px-3 text-center text-blue-50 outline-0 duration-200 hover:bg-fuchsia-600 focus:bg-fuchsia-700 active:pr-20 sm:px-3 sm:py-1.5"
      : id === correctOption
        ? "my-2 sm:my-1 lg:py-3  cursor-pointer rounded-full bg-green-700 px-3 text-center text-blue-50 outline-0 duration-200 active:pr-20  sm:px-7 sm:py-1 disabled:cursor-not-allowed"
        : "my-2 sm:my-0.5 lg:py-3  cursor-pointer rounded-full bg-red-600 px-3 text-center text-blue-50 outline-0 duration-200 active:pr-20  sm:px-7 sm:py-1 disabled:cursor-not-allowed";

  if (type === "option")
    return (
      <button
        className={`${option} py-0.5`}
        onClick={() => setSelectedOption(id)}
        id={id}
        disabled={selectedOption !== null}
      >
        <p className="text-sm disabled:cursor-not-allowed">{children}</p>
      </button>
    );
  if (type === "next")
    return (
      <button
        className={`${base} mt-5 w-full sm:mt-0 sm:w-0`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <button onClick={onClick} className={base}>
      <span className="pb-1">{children}</span>
    </button>
  );
}

export default Button;
