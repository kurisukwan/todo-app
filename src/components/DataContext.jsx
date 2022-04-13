import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const DataContext = createContext();

export function DataProvider({ children }) {

    // Bara för att ha några tasks i början av körningen.
    const [tasks, setTasks] = useState([
        { title: "Do 1", id: uuidv4() },
        { title: "Do 2", id: uuidv4() },
        { title: "Do 3", id: uuidv4() }
    ]);

    // Kontrollerar om det finns värden i 'my-tasks' från local storage vid varje refresh.
    // Om det finns, ta dom värdena och stoppa in dom i vår setTasks state. 
    useEffect(()=> {
        const data = localStorage.getItem('my-tasks')
        if (data) {
            setTasks(JSON.parse(data))
        }
    },[])

    // Vid varje förändring i vår setTasks state så uppdaterar vi 'my-tasks' i vår local storage.
    useEffect(()=> {
        localStorage.setItem('my-tasks', JSON.stringify(tasks))
    },[tasks])

    // Skapar ett nytt objekt med titel och unikt id. En uppdaterad lista sparas i state.
    const addTask = (title) => {
        setTasks([...tasks, { title, id: uuidv4() }])
    }

    // Tar bort den task som klickas genom att jämföra id:t.
    const removeTask = (id) => {
        setTasks(tasks.filter((task) =>
            task.id !== id
        ))
    }

    // Tömmer state för listan
    const clearList = () => {
        setTasks([])
    }

    // Loopar igenom våra tasks från vår state och undersöker varje id:t för varje task.
    // Om id:t hittas så uppdateras titeln till det nya värdet.
    const editTask = (updatedTitle, id) => {
        const newTasks = [...tasks]
        newTasks.forEach((task) => {
            if (id === task.id) {
                task.title = updatedTitle
            }
        })
        setTasks(newTasks)
    }

    return (
        <DataContext.Provider value={{ tasks, addTask, removeTask, clearList, editTask }}>
            {children}
        </DataContext.Provider>
    )
}
