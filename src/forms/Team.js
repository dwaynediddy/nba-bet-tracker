import React, { useState } from 'react'

const Team = () => {
    const [team, setTeam] = useState('');
    const nbaTeams = ["Lakers", "Bulls", "Nets", "Magic"]

    const handleOptions = (e) => {
        setTeam(e.target.value)
    }

  return (
    <div>
        <label htmlFor="nbaTeams">Select a Team: </label>
        <select id="nbaTeams" value={team} onChange={handleOptions}>
            {nbaTeams.map((nbaTeam) => (
              <option key={nbaTeam} value={nbaTeam}>
                {nbaTeam}
              </option> 
            ))}
        </select>
        <p>{team}</p>
    </div>
  )
}

export default Team