import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
  const[text, setText] = useState("")
  const addText =()=>{
    setText("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
  return (
    <div id="main">
    <p>{text}</p>
    <button id="click" onClick ={addText}></button> 
    </div>
  );
}


export default App;
