import { useState } from "react";

import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import { askAssistant } from "../../services/api";

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message:
        "Hi! I'm Aditya's AI assistant. Ask me about projects, skills, experience or certifications.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = async () => {

  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      message: userMessage,
    },
  ]);

  setInput("");

  try {

    const data =
      await askAssistant(
        userMessage
      );

    setMessages((prev) => [
      ...prev,
      {
        sender: "assistant",
        message:
          data.response,
      },
    ]);

  } catch {

    setMessages((prev) => [
      ...prev,
      {
        sender: "assistant",
        message:
          "Unable to connect to AI Assistant.",
      },
    ]);
  }
};

  const handleSuggestedQuestion = (
    question
  ) => {
    setInput(question);
  };

  return (
    <section
      id="ai-assistant"
      className="py-32"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-blue-400 mb-3">
            FLAGSHIP FEATURE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            AI Portfolio Assistant
          </h2>

          <p className="text-slate-400 mt-5">
            Ask questions about my
            projects, skills, experience,
            certifications and education.
          </p>
        </div>

        <div className="border border-slate-800 rounded-3xl p-6">

          <div className="mb-6">
            <SuggestedQuestions
              onQuestionClick={
                handleSuggestedQuestion
              }
            />
          </div>

          <div className="space-y-4 h-[400px] overflow-y-auto mb-6">
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                sender={msg.sender}
                message={msg.message}
              />
            ))}
          </div>

          <ChatInput
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onSend={handleSend}
          />

        </div>
      </div>
    </section>
  );
}

export default ChatBot;