import React, { useState } from 'react'

const Player = () => {
    const [selectedPlayer, setSelectedPlayer] = useState([])
    const player = ["", "some", "sort", "of" ,"player", "api"]
    const [players, setPlayers] = useState([])

    const handleOptions = (e) => {
        setSelectedPlayer(e.target.value)
    }

    const addPlayer = () => {
        setPlayers([...players, {}])
      }

  return (
        <div>
            <div>
                <label htmlFor="player">Select a player: </label>
                <select id="player" value={selectedPlayer} onChange={handleOptions}>
                {player.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
                </select>
                <p>{selectedPlayer}</p>
            </div>
        </div>
        )
    }

export default Player

//i will need to make these forms add subsections 
//how ever many as possible with as many the number of stat options stat options 