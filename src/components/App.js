import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
    const [text, setText] = useState(" ")
    const [showpara, setShowpara] = useState(false)
    const enablePara =()=>{
        setShowPara(true)
        useState("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
    }
    return (
        <div id="main">
        {
            showPara ? <p id="para">{text}</p>: null
       }
            <button id="click" onClick ={enablePara}>addText</button> 

        </div>
   )
}

export default App;
