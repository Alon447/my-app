import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material'
type TicketsProps = {
    numberOfEvents: number
    team: string
}
type Game = {
    date: Date
    team1: string
    team2: string
    stadium: string
    nation: string
    price: number
}
const Tickets = ({ numberOfEvents, team }: TicketsProps) => {
    const games: Game[] = [
        {
            date: new Date('2024-04-20'),
            team1: 'ריאל מדריד',
            team2: 'ברצלונה',
            stadium: 'סנטיאגו ברנבאו',
            nation: 'ספרד',
            price: 450,
        },
        {
            date: new Date('2024-04-27'),
            team1: 'ריאל מדריד',
            team2: 'סביליה',
            stadium: 'סנטיאגו ברנבאו',
            nation: 'ספרד',
            price: 250,
        },
    ]
    return (
        <div>
            <div className="flex items-center justify-end">
                <strong className="ml-1">{team}</strong>
                <p className="ml-1"> אירועים של</p>
                <p className="ml-1">{numberOfEvents}</p>
            </div>
            <TableContainer component={Paper} dir="rtl">
                <Table>
                    <TableBody>
                        {games.map((game, index) => (
                            <TableRow key={index}>
                                <TableCell align="right">
                                    {game.date.toLocaleDateString()}
                                </TableCell>
                                <TableCell align="right">
                                    <h1 className="text-blue-800">
                                        {game.team1} - {game.team2}
                                    </h1>
                                    <strong>
                                        {game.stadium} | {game.nation}
                                    </strong>
                                </TableCell>
                                <TableCell align="right">
                                    <h2 className="text-blue-800">
                                        {game.price}$
                                    </h2>
                                </TableCell>
                                <TableCell align="right">
                                    <Button variant="contained">כרטיסים</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Tickets
