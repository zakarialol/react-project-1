function CalcInput({type,text}){
  
    return (
        <input className="text-[0D0D0D] border bg-gradient w-full p-1 outline-none caret-[#FF5454]" type={type} value={text} name="" id="" readOnly />
    )
}
export default CalcInput;