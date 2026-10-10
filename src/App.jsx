import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [geAppInfo, setGetAppInfo] = useState("")
  const [todos, setTodos] = useState([])
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }
  async function getInfo() {
    const result = await invoke("get_app_info")
    setGetAppInfo(result)
  }
  async function getTodos() {
    const result = await invoke("get_Todos")
    setTodos(result)
  }

  return (
    <main className="m-3 bg-gray-400">
      <div>
        <button className="bg-white rounded p-2 m-5" onClick={getInfo}> Get APP Info</button>
        <p>{geAppInfo.name} - {geAppInfo.version}</p>
      </div>

      <div>
        <h3>MY TODOS</h3>
        <button className="bg-black text-yellow-300 p-2 rounded " onClick={getTodos}>See My TODOS</button>
        <ul className="flex flex-col m-3 p-2">
          {todos.map(todo => <li className="p-2 " key={todo.id}> { todo.id}. {todo.title} - { todo.text}</li>)}
        </ul>
      </div>
      {/* <form action="" className="flex flex-col bg-inherit">
        <input type="text" name="" placeholder="Title" id="" />
        <textarea name="" placeholder="text" id=""></textarea>
        <input type="submit" />
      </form>*/}

      
    </main>
  );
}

export default App;
