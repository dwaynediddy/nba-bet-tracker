import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const IndividualStats = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const statOptions = ['','Points', 'Assist', 'Rebounds']

    const [amount, setAmount] = useState('');
    const amountOptions = ["","1+", "2+", "3+", "4+", "6+", "8+", "10+", "12+", "15+", "16+", "20+", "25+", "30+", "35+", "40+", "50+", "60+",]

    const navigate = useNavigate()
    let [error, setError] = useState(null)

    const handleOptions = (e) => {
        setSelectedOption(e.target.value)
    }
    const handleAmountOptions = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // let result = await submitForm(e.target)
        // if (result.error) {
        //     setError(result.error)
        // } else {
        //     navigate('sucess', {selectedOption, amount})
        // }
    }

  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="">Amount needed: </label>
        <select id="amountOptions" value={amount} onChange={handleAmountOptions}>
            {amountOptions.map((option) => (
                <option key={amountOptions} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <button type="submit">Submit</button>
    </form>
  )
}

export default IndividualStats