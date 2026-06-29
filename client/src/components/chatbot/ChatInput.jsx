import { FiSend } from "react-icons/fi";

function ChatInput({
  value,
  onChange,
  onSend,
}) {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
        if (e.key === "Enter") {
        e.preventDefault();
        onSend();
    }
  }}
        placeholder="Ask about my portfolio..."
        className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none"
      />

      <button
        onClick={onSend}
        className="px-5 bg-blue-600 rounded-xl"
      >
        <FiSend />
      </button>
    </div>
  );
}

export default ChatInput;