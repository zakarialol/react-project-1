import { useState } from "react";


import Paragraph from "./components/calcTitle.jsx";
import CalcInput from "./components/input.jsx";
import Result from "./components/calcRsult.jsx";
import Buttons from "./components/button.jsx";
import BackSpace from "./components/backSpace.jsx";
// import "./index.css"
function App() {
  const [ text,setText] = useState('')
  return (
    <>
      <div className="text-center text-#0D0D0D capitalize mb-8">
        <Paragraph text="standart calculator" />
      </div>
      <div className="mx-1">
        <CalcInput type="text" text={text}  />
        <Result />
      </div>
      <div className="flex flex-col gap-7">
        <div className="gap-4 btnHolder">
          <Buttons setText={setText}  text={text}
            array={[
              { value: "C", style: "text-[#FF5454]" ,type:"clear"},
              { value: "%", style: "text-red-500",type:"modilo" },
              { value: <BackSpace />, style: "text-[#FF5454]",type:"backspace" },
              { value: "÷", style: "text-[#FF5454]",type:"devide" },
            ]}
          />
        </div>
        <div className="gap-4 btnHolder">
          <Buttons setText = {setText} text={text}
            array={[
              { value: "7",style:"",type:"number" },
              { value: "8",style:"",type:"number" },
              { value: "9",style:"",type:"number" },
              { value: "x",style:"text-[#FF5454]",type:"divide"},
            ]}
          />
        </div>
        <div className="gap-4 btnHolder">
          <Buttons setText = {setText} text={text}
            array={[
              { value: "4" , style:"",type:"number"},
              { value: "5" , style:"",type:"number"},
              { value: "6" , style:"",type:"number"},
              { value: "-" , style:"text-[#FF5454]",type:"discount"},
            ]}
          />
        </div>
        <div className="gap-4 btnHolder">
          <Buttons setText = {setText} text={text}
            array={[
              { value: "1", style:"",type:"number" },
              { value: "2", style:"",type:"number" },
              { value: "3", style:"",type:"number" },
              { value: "+", style:"text-[#FF5454]",type:"add" },
            ]}
          />
        </div>
        <div className="gap-4 btnHolder">
          <Buttons setText = {setText} text={text}
            array={[
              { value: "±",style:"",type:"reflect" },
              { value: "0",style:"",type:"number" },
              { value: ".",style:"",type:"point" },
              { value: "=",style:"text-[#FF5454]",type:"equals" },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
