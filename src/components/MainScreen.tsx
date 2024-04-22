import React from 'react'
import Header from '../containers/Header'
import SearchBar from './SearchBar'
import Card from './Card'
import champions_league from '../images/champions-league.jpeg'
import preimer_league from '../images/preimer-league.png'
function MainScreen() {
    return (
        <div>
            {/* <Header></Header> */}
            <SearchBar></SearchBar>
            <div>
                <Card
                    imageURL={champions_league}
                    text="champions_league"
                ></Card>
                <Card imageURL={preimer_league} text="preimer_league"></Card>
            </div>
        </div>
    )
}

export default MainScreen
