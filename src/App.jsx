import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="m-3">
      <form action="" className="flex flex-col ">
        <input type="text" name="" placeholder="Title" id="" />
        <textarea name="" placeholder="text" id=""></textarea>
        <input type="submit" />
      </form>
    </main>
  );
}

export default App;
