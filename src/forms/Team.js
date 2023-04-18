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
        <select id="nbaTeams" value={nbaTeams} onChange={handleOptions}>
            {nbaTeams.map((nbaTeam) => (
              <nbaTeam key={nbaTeam} value={nbaTeam}>
                {team}
              </nbaTeam> 
            ))}
        </select>
        <p>{team}</p>
    </div>
  )
}

export default Team