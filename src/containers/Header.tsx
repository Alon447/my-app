import React from 'react'
import { Button } from '@mui/material'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from '@radix-ui/react-dropdown-menu'
import logo from '../images/tickets_logo.jpg'
type league = { id: number; name: string; clubs: string[] }
const Header = () => {
    const leagues: league[] = [
        {
            id: 1,
            name: 'ליגה אנגלית',
            clubs: ['צלסי', 'מנצסטר יונייטד', 'ליברפול'],
        },
        {
            id: 2,
            name: 'ליגה ספרדית',
            clubs: ['צלסי', 'מנצסטר יונייטד', 'ליברפול'],
        },
        {
            id: 3,
            name: 'ליגה איטלקית',
            clubs: ['צלסי', 'מנצסטר יונייטד', 'ליברפול'],
        },
        {
            id: 4,
            name: 'ליגה ישראלית',
            clubs: ['צלסי', 'מנצסטר יונייטד', 'ליברפול'],
        },
    ]
    return (
        <header className="bg-white-800 py-4">
            <img src={logo}></img>
            <nav className="flex justify-center">
                <ul className="flex space-x-4">
                    {leagues.map((league) => (
                        <li key={league.id}>
                            <Button className="text-white">
                                {league.name}
                            </Button>
                            <ul className=" bg-white-800">
                                {league.clubs.map((club, index) => (
                                    <li key={index} className="px-4 py-2">
                                        <Button variant="text" color="inherit">
                                            {club}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
export default Header
