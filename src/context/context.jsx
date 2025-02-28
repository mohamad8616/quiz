import { Children, createContext, useContext, useReducer } from "react";

const questions = [
  {
    question: "محبوب ترین فریم ورک جاوا اسکریپت کدام است؟",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "React توسط کدام شرکت اختراع شد؟",
    options: ["گوگل", "اپل", "نتفلیکس", "فیسبوک"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "بلوک اصلی ساخت برنامه‌های React چیست؟",
    options: ["Components", "Blocks", "Elements", "Effects"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "نام سینتکسی که برای توصیف UI در کامپوننت‌های React استفاده می‌شود چیست؟",
    options: ["FBJ", "Babel", "JSX", "ES2015"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "داده‌ها به طور طبیعی در برنامه‌های React چگونه جریان می‌یابند؟",
    options: [
      "از والدین به فرزندان",
      "از فرزندان به والدین",
      "هر دو جهت",
      "توسط توسعه‌دهنده تعیین می‌شود",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "چگونه داده‌ها را به یک کامپوننت فرزند منتقل کنیم؟",
    options: ["State", "Props", "PropTypes", "Parameters"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "چه زمانی از state مشتق شده استفاده می‌کنیم؟",
    options: [
      "هر زمانی که state نباید باعث re-render شود",
      "هر زمانی که state بتواند با یک effect همگام‌سازی شود",
      "هر زمانی که state باید برای همه کامپوننت‌ها قابل دسترسی باشد",
      "هر زمانی که state بتواند از یک متغیر state دیگر محاسبه شود",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question: "چه چیزی باعث re-render شدن UI در React می‌شود؟",
    options: [
      "اجرای یک effect",
      "انتقال props",
      "به‌روزرسانی state",
      "اضافه کردن event listener به عناصر DOM",
    ],
    correctOption: 2,
    points: 20,
  },
  {
    question: "چه زمانی مستقیماً به DOM دسترسی پیدا می‌کنیم؟",
    options: [
      "وقتی نیاز به گوش دادن به یک event داریم",
      "وقتی نیاز به تغییر UI داریم",
      "وقتی نیاز به اضافه کردن استایل داریم",
      "تقریباً هیچ‌وقت",
    ],
    correctOption: 3,
    points: 20,
  },
  {
    question:
      "در چه شرایطی از یک callback برای به‌روزرسانی state استفاده می‌کنیم؟",
    options: [
      "وقتی به‌روزرسانی state کند باشد",
      "وقتی state به‌روزرسانی شده بسیار حجیم باشد",
      "وقتی به‌روزرسانی state باید سریع‌تر انجام شود",
      "وقتی state جدید به state قبلی وابسته باشد",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question:
      "اگر یک تابع به useState پاس دهیم، آن تابع چه زمانی فراخوانی می‌شود؟",
    options: [
      "در هر re-render",
      "هر بار که state را به‌روزرسانی می‌کنیم",
      "فقط در render اولیه",
      "اولین باری که state را به‌روزرسانی می‌کنیم",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question:
      "برای درخواست API در render اولیه کامپوننت از کدام هوک استفاده می‌کنیم؟",
    options: ["useState", "useEffect", "useRef", "useReducer"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "کدام متغیرها باید در آرایه وابستگی useEffect قرار گیرند؟",
    options: [
      "معمولاً هیچ‌کدام",
      "همه متغیرهای state",
      "همه state و props که در effect استفاده شده‌اند",
      "همه متغیرهای مورد نیاز برای پاک‌سازی",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question: "یک effect همیشه در render اولیه اجرا می‌شود.",
    options: [
      "درست",
      "به آرایه وابستگی بستگی دارد",
      "غلط",
      "به کد داخل effect بستگی دارد",
    ],
    correctOption: 0,
    points: 30,
  },
  {
    question: "اگر یک effect آرایه وابستگی نداشته باشد، چه زمانی اجرا می‌شود؟",
    options: [
      "فقط زمانی که کامپوننت mount می‌شود",
      "فقط زمانی که کامپوننت unmount می‌شود",
      "اولین باری که کامپوننت re-render می‌شود",
      "هر بار که کامپوننت re-render می‌شود",
    ],
    correctOption: 3,
    points: 20,
  },
];
const initialState = {
  index: 0,
  questions,
  status: "ready",
  answer: null,
  points: 0,
};
const QuizContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "ready":
      return { ...state, status: "ready" };
    case "start":
      return { ...state, status: "start" };
    case "next":
      if (state.index < state.questions.length)
        return { ...state, index: state.index++, points: action.payload };
      return state;
    default:
      return state;
  }
}
function QuizProvider({ children }) {
  const [{ index, questions, status, answer, points }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <QuizContext.Provider
      value={{ index, status, questions, answer, points, dispatch }}
    >
      {" "}
      {children}{" "}
    </QuizContext.Provider>
  );
}
function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    return "QuizContext was used outside of QuizProvider";
  return context;
}
export { QuizProvider, useQuiz };
