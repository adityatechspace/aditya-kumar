import axios from "axios";

const API =
  axios.create({
    baseURL:
      import.meta.env.VITE_API_URL,
  });

export const askAssistant =
  async (message) => {
    const response =
      await API.post(
        "/chat",
        { message }
      );

    return response.data;
  };

  export const sendContactMessage = async (contactData) => {
  const response = await API.post("/contact", contactData);
  return response.data;
};