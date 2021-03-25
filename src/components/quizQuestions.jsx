import React, { useState } from "react";

function QuizQuestions() {
  const info = [
    {
      questionText: "پایتخت کشور ایتالیا کدام است ؟",
      answerOptions: [
        { answerText: "ونیز", isCorrect: false },
        { answerText: "رم", isCorrect: true },
        { answerText: "میلان", isCorrect: false },
        { answerText: "ناپولی", isCorrect: false },
      ],
    },

    {
      questionText: "پایتخت کشور ژاپن کدام است ؟",
      answerOptions: [
        { answerText: "هاندا", isCorrect: false },
        { answerText: "ستو", isCorrect: false },
        { answerText: "کاسوگای", isCorrect: false },
        { answerText: "توکیو", isCorrect: true },
      ],
    },

    {
      questionText: "پایتخت کشور ایتالیا آلمان است ؟",
      answerOptions: [
        { answerText: "برلین", isCorrect: true },
        { answerText: "مونیخ", isCorrect: false },
        { answerText: "هامبورگ", isCorrect: false },
        { answerText: "آلمان", isCorrect: false },
      ],
    },

    {
      questionText: "پایتخت کشور اسپانیا کدام است ؟",
      answerOptions: [
        { answerText: "ویگو", isCorrect: false },
        { answerText: "مادرید", isCorrect: true },
        { answerText: "بارسلونا", isCorrect: false },
        { answerText: "والنسیا", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const goToNext = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nexQuestion = currentQuestion + 1;
    if (nexQuestion < info.length) {
      setCurrentQuestion(nexQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="quiz-app" id="quiz-quest">
      <div className="row">
        {showScore ? (
          <div className="d-flex flex-column align-items-center justify-content-center col-12">
            <h4>
              {" "}
              شما به {score} مورد از {info.length} مورد پاسخ درست داده اید{" "}
            </h4>

            <button onClick={refreshPage} className="btn btn-danger my-5">
              بازگشت
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center col-12">
            <div className="d-flex flex-column align-items-center justify-content-center col-12">
              <div>
                <h3>
                  <span className="firstquest">سوال 1</span>
                  <span className="secondquest">از {info.length}</span>
                </h3>
              </div>
              <div className="orgquest">
                <h5>{info[currentQuestion].questionText}</h5>
              </div>
            </div>
            <div className="col-12 d-flex flex-column m-5">
              {info[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  key={answerOption.answerText}
                  onClick={() => goToNext(answerOption.isCorrect)}
                  style={{ fontWeight: 700 }}
                  className="btn btn-dark mx-auto my-2 col-lg-6 col-sm-8"
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizQuestions;
