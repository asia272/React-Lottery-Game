import {genRandomNum, sum} from "./helper";
import { useState } from "react"
import Ticket from "./ticket";
import Button from '@mui/material/Button';
import "./lottery.css";
export default function Lottrey({n, winCondion}){
    let [ticket, setTicket] = useState(genRandomNum(n))
    const [isWining, setIsWining] = useState(false);

    function genNewTicket(){
        const newTicket = genRandomNum(n);
        setTicket(newTicket);
        setIsWining(winCondion(newTicket));
    }
    function resetGame() {
        setTicket(genRandomNum(n));
        setIsWining(false);
      }
;
    return(
    <>
    <Ticket ticket = {ticket}/>
    <br />
    <Button
    style={{backgroundColor:"rgb(4, 94, 56)"}}
     variant="contained" 
    onClick={genNewTicket}>
       Play
     </Button>

    <br />
    {isWining && (
        <div className="overlay">
          <div className="win-box">
            <p>Congratulations, you won this Lottery!</p>
            <Button variant="contained" onClick={resetGame}>
              Start Again
            </Button>
          </div>
        </div>
      )}
    </>
    )
}