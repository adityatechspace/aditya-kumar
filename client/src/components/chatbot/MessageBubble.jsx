import ReactMarkdown from "react-markdown";

function MessageBubble({ message, sender }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 shadow-lg ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 border border-slate-700"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap leading-7">
            {message}
          </p>
        ) : (
          <div
            className="
              prose
              prose-invert
              max-w-none

              prose-headings:text-white
              prose-headings:font-semibold

              prose-p:text-slate-200
              prose-p:leading-7

              prose-strong:text-white

              prose-ul:text-slate-200
              prose-ol:text-slate-200
              prose-li:marker:text-blue-400

              prose-a:text-blue-400
              hover:prose-a:text-blue-300
            "
          >
            <ReactMarkdown
              components={{
                a: ({ ...props }) => (
                  <a
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            >
              {message}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageBubble;