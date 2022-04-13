import React, { useContext } from 'react'
import { DataContext } from './DataContext'

function Footer() {
    const { clearList, tasks } = useContext(DataContext)

    return (
        <>
            <div className='clear-div'>
                <button className='btn btn-danger clear-button' onClick={clearList}>Clear All</button>
                <span className='task-number-text'>You have {tasks.length} tasks</span>
            </div>
        </>
    )
}

export default Footer