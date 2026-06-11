import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import "/src/style.css";

export default function Register() {
  return (
    <>
      <div>
        <h1 class="text-gray-500">register Page</h1>
        <input placeholder="username" />
      </div>
    </>
  );
}
