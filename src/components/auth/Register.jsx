import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

//const navigate = useNavigate();

export default function Register() {
  const [username, setUsername] = useState("");

  const { login } = useAuth();

  const handleSubmit = () => {
  if (!username.trim()) return;

  login(username);

  //navigate("/chat");
};

  return (
    <div>
      <h1>Register</h1>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      <button className="outline" onClick={handleSubmit}>Registers</button>
    </div>
  );


}
