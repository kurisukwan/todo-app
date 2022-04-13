import React, { useContext } from 'react'
import Task from './Task'
import { DataContext } from './DataContext'

function List() {
    const { tasks } = useContext(DataContext)
    console.log(tasks)

    return (
        <>
            {tasks.length ? (
                <div>
                    {tasks.map((task) => {
                        return (<Task task={task} key={task.id} />)
                    })}
                </div>
            ) : (
                <div className='no-task d-flex justify-content-center my-5'>
                    <p>No tasks</p>
                </div>
            )}
        </>
    )
}

export default List