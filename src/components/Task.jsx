import React, { useContext, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { DataContext } from './DataContext';


function Task(props) {
    const { task } = props
    const { removeTask, editTask } = useContext(DataContext)

    const [showEdit, setShowEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(task.title)

    const handleOnEdit = () => {
        setShowEdit(true)
    }

    const handleOnUpdate = () => {
        if (editTitle) {
            editTask(editTitle, task.id)
        } else {
            setEditTitle(task.title)
        }
        setShowEdit(false)
    }

    const handleOnChange = (e) => {
        setEditTitle(e.target.value)
    }

    if (showEdit) {
        return (
            <li className='item-box d-flex justify-content-between'>
                <input type="text"
                    className='update-input'
                    value={editTitle}
                    onChange={handleOnChange} />
                <div>
                    <button type='submit'
                        className='btn btn-success'
                        onClick={handleOnUpdate}>Update</button>
                </div>
            </li>
        )
    } else {
        return (
            <li className='item-box d-flex justify-content-between'>
                <span>{task.title}</span>
                <div>
                    <FaEdit className='icon-item'
                        title='Edit'
                        onClick={handleOnEdit} />
                    <FaTrashAlt className='icon-item'
                        title='Delete'
                        onClick={() => removeTask(task.id)} />
                </div>
            </li>
        )
    }
}

export default Task