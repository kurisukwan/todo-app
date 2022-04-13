import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import List from './List'
import Footer from './Footer'
import { DataProvider } from './DataContext'

function App() {
  return (
    <div className='custom-container'>
      <header>
        <h1 className='text-center my-4'>My Todo App</h1>
      </header>
      <DataProvider>
        <Form />
        <List />
        <Footer />
      </DataProvider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));