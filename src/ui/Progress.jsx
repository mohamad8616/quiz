import Button from "./Button";

function Progress({ children }) {
  return (
    <div className="mx-7 h-2/12 w-auto">
      <div className="flex items-center justify-between px-2">
        <p>
          سوال شماره : <span>1</span>
        </p>
        <Button>شروع</Button>
      </div>
      {children}

      <p className="mt-2">
        امتیازات کسب شده: <span>0</span>
      </p>
    </div>
  );
}

export default Progress;
