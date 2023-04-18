import React, { useState } from 'react'

const Player = () => {
    const [selectedPlayer, setSelectedPlayer] = useState([])
    const player = ["some", "sort", "of" ,"player", "api"]

    const handleOptions = (e) => {
        setSelectedPlayer(e.target.value)
    }

  return (
    <div>
        <div>
            <label htmlFor="player" >Select a player: </label>
                <select id="player" value={player} onChange='something'>
                    {player.map((option) => (
                        <option key={player} value={option}>
                            {option}
                        </option>
                    ))}    
                </select> 
                <p>{selectedPlayer}</p>
        </div>
        <h3>{selectedPlayer}</h3>
    </div>
  )
}

export default Player

//i will need to make these forms add subsections 
//how ever many as possible with as many the number of stat options stat options 