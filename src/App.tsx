import React from 'react'
import './App.css'
import Header from './containers/Header'
import MainScreen from './components/MainScreen'
import Tickets from './containers/Tickets'
function App() {
    return (
        <div className="App">
            {/* <MainScreen></MainScreen> */}
            <Tickets numberOfEvents={6} team="ריאל מדריד"></Tickets>
        </div>
    )
}

export default App
