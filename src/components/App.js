import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
    const [text, setText] = useState("")
//     const [showpara, setShowpara] = useState(false)
   
    const enablePara = ()=>{
//         setShowpara(true)   
        setText("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")           
    }
    return (
        <div id="main">
        
//             showpara ?
            <p id="para">{text}</p>
            
            <button id="click" onClick ={enablePara}>addText</button> 
        </div>
   )
}

export default App;
