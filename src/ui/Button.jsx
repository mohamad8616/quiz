function Button({ type, children }) {
  const base =
    "flex cursor-pointer items-center justify-center rounded-full bg-orange-600 px-6 py-1.5 text-xl text-orange-50 duration-300 hover:bg-orange-500";
  return (
    <button className={base}>
      <span className="pb-2">{children}</span>
    </button>
  );
}

export default Button;
