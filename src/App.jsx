import React from 'react'
import CardCart from './Components/CartCard'
import UserContext from './Utils/UserContext'

export const userContext = React.createContext()

function App() {
  return (
    <>
    <UserContext>
      <div className='container my-5'>
        <CardCart/>
      </div>
    </UserContext>
    </>
    )
}

export default App;