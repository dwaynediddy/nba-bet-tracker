import React, { useState } from 'react'

const IndividualStats = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const statOptions = ['Points', 'Assist', 'Rebounds']

    const handleOptions = (e) => {
        setSelectedOption(e.target.value)
    }

  return (
    <div>
        <div>
            <label htmlFor="statOptions">Select an option: </label>
            <select id="statOptions" value={selectedOption} onChange={handleOptions}>
                {statOptions.map((option) => (
                    <option key={statOptions} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <p>{selectedOption}</p>
        </div>
    </div>
  )
}

export default IndividualStats