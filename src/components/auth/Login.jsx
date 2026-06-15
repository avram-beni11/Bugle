import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import "/src/style.css";

export default function Login() {
  return (
    <main className="log-box">
      <div class="">
        <h1 class="">Login</h1>
        <input class="outline" placeholder="Email" type="email" />
        <input class="outline" placeholder="Password" type="password" />
      </div>
    </main>
  );
}
