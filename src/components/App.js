import React, {Component, useState} from "react";
import "./../styles/App.css";
const addText=()=>{
  const input = [...text];
  setText(input)

function App() {
  const[text, setText] = useState("")
  return (
    <div id="main">
    <input type = "text" onChange={(e)=>setText(e.target.value)}/>
    <button id="click" onClick ={addText}></button> 
    </div>
  );
}


export default App;
