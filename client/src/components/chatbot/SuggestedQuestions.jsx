function SuggestedQuestions({
  onQuestionClick,
}) {
  const questions = [
    "Tell me about your skills",
    "What projects have you built?",
    "What AI technologies do you use?",
    "Tell me about your experience",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {questions.map((question) => (
        <button
          key={question}
          onClick={() =>
            onQuestionClick(question)
          }
          className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm hover:border-blue-500"
        >
          {question}
        </button>
      ))}
    </div>
  );
}

export default SuggestedQuestions;