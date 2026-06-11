import { Link } from "react-router-dom"
import "/src/style.css";

export default function Lander() {
   return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-4">
      <h1 className="text-4xl font-bold">Welcome!</h1>

      <div className="flex gap-4">
        <Link to="/login" className="px-4 py-2 bg-blue-500 rounded">
          Login
        </Link>

        <Link to="/register" className="px-4 py-2 bg-green-500 rounded">
          Register
        </Link>

        <Link to="/chat" className="px-4 py-2 bg-gray-700 rounded">
          Enter Chat
        </Link>
      </div>
    </div>
  ) 
};
