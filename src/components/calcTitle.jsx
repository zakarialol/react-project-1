// import "./index.css"
function Paragraph({text}){
    return <>
            <p className="relative pb-1 mx-auto font-semibold w-fit">{text}
                <span className="absolute bottom-0 w-1/2 h-1 pt-1 bg-[#FF5454] left-1/4"></span>
            </p>
        </>
}
export default Paragraph;