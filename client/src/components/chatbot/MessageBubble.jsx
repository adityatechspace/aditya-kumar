function MessageBubble({
  message,
  sender,
}) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] px-5 py-3 rounded-2xl ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-slate-200"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default MessageBubble;