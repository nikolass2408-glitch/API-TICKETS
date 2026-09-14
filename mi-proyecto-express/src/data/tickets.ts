import { ticket } from "../models/ticket.js";

const ticket: ticket [] =

[
    {
        "id": 1,
        "title": "Equipo no enciende",
        "description": "El computador del área administrativa no inicia.",
        "priority": "high",
        "resolved": false
    },
    {
        "id": 2,
        "title": "Problema con impresora",
        "description": "La impresora no aparece disponible en la red.",
        "priority": "medium",
        "resolved": false
    },
    {
        "id": 3,
        "title": "Restablecer contraseña",
        "description": "El usuario no puede ingresar al sistema.",
        "priority": "low",
        "resolved": true
    }
]

export default ticket;