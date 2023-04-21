import React, { useState } from 'react'

const Player = () => {
    const [selectedPlayer, setSelectedPlayer] = useState('')
    const player = [
        {
            name: "Lebron James"
        },
        {
            name: "Chris Paul"
        },
        {
            name: "Anthony Davis"
        }
    ]
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
                {player.map((option, i) => (
                    <option key={i} value={option}>
                        {option.name}
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