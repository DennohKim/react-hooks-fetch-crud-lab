import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => setQuestions(questions));
  }, [questions, setQuestions]);

  function handleDeleteQuestion(deleteQuestion) {
    const updateQuestions = questions.filter(
      (question) => question.id !== deleteQuestion.id
    );

    setQuestions(updateQuestions);
  }

  const questionList = questions.map((question) => {
    return (
      <QuestionItem
        key={question.id}
        onDeleteQuestion={handleDeleteQuestion}
        question={question}
      />
    );
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
