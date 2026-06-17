import { FiMessageCircle } from "react-icons/fi";

function FloatingAIButton() {

  const scrollToChat = () => {
    document
      .getElementById("ai-assistant")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <button
      onClick={scrollToChat}
      className="fixed bottom-6
right-6
z-50
bg-blue-600
p-4
rounded-full
ai-glow
">
      <FiMessageCircle size={24} />
    </button>
  );
}

export default FloatingAIButton;