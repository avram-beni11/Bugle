import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ChatPage() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/register" />;
  }

  return (
    <div>
      <h1>Chat</h1>
      <p>Logged in as: {user.username}</p>
    </div>
  );
}