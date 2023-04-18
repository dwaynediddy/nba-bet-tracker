import React, { useState } from 'react'

const Watcher = () => {
    const [points, setPoints] = useState(0)
    
    const freeThrowIncrement = () => {
        setPoints(points+1)  
    }
    const twoPointIncrement = () => {
        setPoints(points+2)  
    }
    const threePointIncrement = () => {
        setPoints(points+3)  
    }

  return (
    <div>
        <h2>Stat Tracker</h2>
        <div>
            <button onClick={freeThrowIncrement}>
                free throw
            </button>
            <button onClick={twoPointIncrement}>
                2 pointer
            </button>
            <button onClick={threePointIncrement}>
            3 pointer
            </button>
            <div>Current Points: {points}</div>
        </div>
    </div>
  )
}

export default Watcher