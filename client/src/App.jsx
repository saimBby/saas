import React, { useState, useEffect } from "react"
import { useSignup } from "./hooks/useSignup"

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {signup, error} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username, password)
  }


  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mt-4">
            Sign up
          </h1>
          <input type="text" onChange={(e) => setUsername(e.target.value)}  className="bg-black p-4 mt-4 text-white" placeholder="Username">

          </input>
          <input type="password" onChange={(e) => setPassword(e.target.value)}  className="bg-black p-4 mt-4 text-white" placeholder="Password">

          </input>      
          <button className="text-white bg-black p-3 mt-4">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default App