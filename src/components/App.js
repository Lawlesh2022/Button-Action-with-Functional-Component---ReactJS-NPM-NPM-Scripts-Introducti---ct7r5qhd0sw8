import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
    const [text, setText] = useState("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
    const [showPara, setShowPara] = useState(false)
    const enablePara =()=>{
        setShowPara(true)
    }
    return (
        <div id="main">
            showPara && <p id="para">{text}</p>
            <button id="click" onClick ={enablePara}>addText</button> 
        </div>
   )
}

export default App;
