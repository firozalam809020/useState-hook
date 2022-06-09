import React, {useState} from "react";
import "./style.css";
// onchange event along with hooks.

export default function App() {
  let [input,setInput] = useState('')
  function manageInp(e){
    let {id,value} =e.target;
    console.log(id,value)
    setInput(value)
  }
  return (
    <div>
      <input type="text" placeholder="enter your input" id="tuesday" onChange={manageInp}/>
    </div>
  );
}
