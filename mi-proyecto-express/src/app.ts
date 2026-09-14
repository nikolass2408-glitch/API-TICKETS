import express, { Application, Request, Response } from "express";
import tickets from "./data/tickets.js";

const app: Application = express();

app.use(express.json());

app.get("/api/tickets", (req: Request, res: Response) => {
  const { resolved } = req.query;

  if (resolved === "true") {
    const resolvedTickets = tickets.filter(
      (ticket) => ticket.resolved === true
    );

    return res.status(200).json(resolvedTickets);
  }

  if (resolved === "false") {
    const pendingTickets = tickets.filter(
      (ticket) => ticket.resolved === false
    );

    return res.status(200).json(pendingTickets);
  }

  return res.status(200).json(tickets);
});


app.get ("/api/tickets/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: " El id debe ser un entero positivo"
        });
    }

    const ticket = tickets.find((ticket) => ticket.id === id);

    if (!ticket) {
        return res.status(404).json({
            message: "Ticket no encontrado"
        });
    }

    return res.status(200).json(ticket);
});

app.post("/api/tickets", (req: Request, res: Response) => {
    const { title, description, priority, resolved } = req.body;


    const newId = 
        tickets.length > 0
        ? Math.max(...tickets.map((ticket) => ticket.id)) + 1
      : 1;

  const newTicket = {
    id: newId,
    title,
    description,
    priority,
    resolved
  };

  tickets.push(newTicket);

  return res.status(201).json(newTicket);
});

export default app;
