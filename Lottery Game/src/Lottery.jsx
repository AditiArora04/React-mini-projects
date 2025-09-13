import { useState } from "react";
// import "./Lottery.css";
import { genTicket, sum } from "./helper"; 
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n=3, winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            {/* <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div> <br /> <br /> */}
            <Ticket ticket={ticket} /> <br />
            <Button action={buyTicket} />
            {/* <button onClick={buyTicket}>Buy New Ticket</button> <br />  */}
            <h3>{isWinning  && "Congratulations, You WON :)"} </h3>
        </div>
    );
}