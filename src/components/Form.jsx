import React, { useContext, useState } from 'react'
import { DataContext } from './DataContext'

function Form() {

    const { addTask } = useContext(DataContext)
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>What do you need to do?</label>
            <div className='d-flex justify-content-between'>
                <input className='form-control input-form'
                    type='text'
                    placeholder='Enter your task...'
                    required
                    onChange={handleChange}
                    value={text}
                ></input>
                <div className='d-flex'>
                    <button className='btn btn-primary add-button'
                        type='Submit'>Add</button>
                </div>
            </div>
        </form>
    )
}

export default Form