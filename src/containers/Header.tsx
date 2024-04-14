import React, { useState } from 'react'
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
    const [SelectedIndex, setSelectedIndex] = React.useState(-1)
    return (
        <header className="bg-white-800 py-4">
            <nav className="flex justify-center">
                <div className="flex justify-center">
                    <a href="">
                        <img src={logo}></img>
                    </a>
                    <div className="flex justify-center" id="">
                        <ul className="flex justify-center">
                            {leagues.map((league, index) => (
                                <li
                                    key={league.name}
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <a
                                        className={
                                            SelectedIndex === index
                                                ? 'nav-link active fw-bold'
                                                : 'nav-link'
                                        }
                                        href="#"
                                    >
                                        {league.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <form>
                            <input></input>
                            <button>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header
