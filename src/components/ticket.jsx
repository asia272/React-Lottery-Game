import TicketNum from "./ticketNum";
import "./ticket.css"
export default function Ticket({ ticket }) {
    return (
        <>
        <div className="ticketBox">
           {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
         
        </>
    );
}
