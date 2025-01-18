import Lottrey from "./components/lottery"
import './App.css'
import { sum } from './components/helper'
import Description from './components/description'

function App() {
  let winCondion = (ticket)=>{
   return sum(ticket) === 15
  }

  return (
    <>
    <div>
     <Description/>
     <Lottrey n ={3} winCondion ={winCondion}/>
    </div>
    </>
  )
}

export default App
