import React, { useState } from 'react'

const IndividualStats = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Points', 'Assist', 'Rebounds']

    const handleOptions = (e) => {
        setSelectedOption(e.target.value)
    }

  return (
    <div>
        <div>
            <label htmlFor="options">Select an option: </label>
            <select id="options" value={selectedOption} onChange={handleOptions}>
                {options.map((option) => (
                    <option key={option} value={option}>
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