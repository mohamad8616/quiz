const quiee = true;
function quiz() {
  return (
    <div className="mx-auto my-4 flex h-80 w-10/12 flex-col items-center justify-between bg-amber-200 p-5 text-start">
      {!quiee && (
        <ul className="w-full space-y-3 p-5">
          <li className="mb-9 text-xl font-bold">
            چند نکته در مورد شروع آزمون:
          </li>
          <li className="list-disc p-2 text-xl">
            پس از شروع، 7 دقیقه وقت دارید تا به سوالات پاسخ دهید
          </li>
          <li className="list-disc p-2 text-xl">
            در صورتی گه بیش از 5 پاسخ نادرست داشته باشید، در آزمون مردود می شوید
          </li>
        </ul>
      )}
      {/* {quiee && questions.map} */}
    </div>
  );
}

export default quiz;
