import Paragraph from "./components/calcTitle.jsx"
import CalcInput from "./components/input.jsx"
import Result from "./components/calcRsult.jsx"
import Buttons from "./components/button.jsx"
function App() {
  return (
    <>
        <div className="text-center text-#0D0D0D capitalize mb-8">
          <Paragraph text="standart calculator"/>
        </div>
        <div className="mx-1">
          <CalcInput type="number"/>
          <Result/>
        </div>
        <div className="grid grid-cols-4">
          <Buttons/>
        </div>
    </>
  )
}

export default App