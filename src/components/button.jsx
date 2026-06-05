import xsquare from "../assets/x-square.png"
import Cimg from "../assets/C.png"
import reflect from "../assets/reflect.png"
import BackSpace from "./backSpace.jsx"
function Buttons(){
    const buttonArray = [{icon:Cimg},{value:"%"},{icon:reflect},{value:"÷"},{value:"7"},{value:"8"},{value:"9"},{value:"x"},{value:"4"},{value:"5"},{value:"6"},{value:"-"},{value:"1"},{value:"2"},{value:"3"},{value:"+"},{svg:<BackSpace/>},{value:"0"},{value:"."},{value:"="}]
    return (
            buttonArray.map((btn,index)=>(
                <button className="p-2 mx-auto font-bold text-center cursor-pointer">
                    {btn.icon && <img src={btn.icon} alt="icon" />}
                    {btn.svg && btn.svg}
                    {btn.value }               
                </button>
            ))
         )
}
export default Buttons