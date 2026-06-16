import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ChatPage() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/register" />;
  }

  const [messages, setMessages] = useState([
    { id: 1, user: "system", text: "Welcome to the chat!" },
  ]);

  const [input, setInput] = useState("");
  {
    /* go over code again */
  }

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: user.username,
      text: input,
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div>
      <h1>Chat</h1>
      <p>Logged in as: {user.username}</p>

      {messages.map((msg) => (
        <div key={msg.id}>
          <strong>{msg.user}:</strong> {msg.text}
        </div>
      ))}

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
