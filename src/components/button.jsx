import xsquare from "../assets/x-square.png"
import Cimg from "../assets/C.png"
import reflect from "../assets/reflect.png"
import CalcInput from "./input"
// import BackSpace from "./backSpace.jsx"
function Buttons({array,setText,text}){
        console.log('text',text)
        function logg(btn){
            switch(btn.type){
                case "number":
                    console.log('yes number btw')
                    break;
                case "equals":
                    console.log('yes equals btw')
                    break;
                default:
                    break;
            }
        }
        return (
            <>
                {array.map((btn,index)=>(
                    <button key={btn.value} onClick={()=>{
                        logg(btn)
                        setText(text + btn.value)
                    }} value={btn.value}  className={`font-poppins min-w-8 min-h-8 ${btn.style}`}>
                        {btn.value}
                    </button>
                ))}
            </>
        )
}
export default Buttons