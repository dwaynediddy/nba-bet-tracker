import React, { useState } from 'react'
import { useNavigate, Form } from 'react-router-dom'

const IndividualStats = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const statOptions = ['','Points', 'Assist', 'Rebounds']

    const [amount, setAmount] = useState('');
    const amountOptions = [
        {
            leg: 1
        },
        {
            leg: 2
        },
        {
            leg: 3
        },
        {
            leg: 4
        },
        {
            leg: 6
        },
        {
            leg: 8
        },
        {
            leg: 10
        },
        {
            leg: 12
        },
        {
            leg: 14
        },
        {
            leg: 16
        },
        {
            leg: 20
        },
        {
            leg: 25
        },
        {
            leg: 30
        },
        {
            leg: 35
        },
        {
            leg: 40
        },
        {
            leg: 45
        },
        {
            leg: 50
        },
        {
            leg: 60
        }
    ]

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
        let result = await(e.target)
        if (result.error) {
            setError(result.error)
        } else {
            navigate('sucess', {selectedOption, amount})
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="statOptions">Select an option: </label>
            <select id="statOptions" value={selectedOption} onChange={handleOptions}>
                {statOptions.map((statOption) => (
                    <option key={statOption} value={statOption}>
                        {statOption}
                    </option>
                ))}
            </select>
            <p>{selectedOption}</p>
        </div>
        <label htmlFor="">Amount needed: </label>
        <select id="amountOptions" value={amount} onChange={handleAmountOptions}>
            {amountOptions.map((option, i) => (
                <option key={i} value={option}>
                    {option.leg}
                </option>
            ))}
        </select>
        <button type="submit">Submit</button>
    </form>
  )
}

export default IndividualStats