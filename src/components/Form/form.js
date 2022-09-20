import React, { useState } from 'react'
import './form.css'

export const Form = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Usuario:${user} Contraseña:${pass}`)
    }

    return (
        <form className="form-box" onSubmit={handleSubmit}>
            <label>
            User:
            <input type="text" id="user" placeholder="User" name="user" required onChange={(e) => setUser(e.target.value)}/>
            </label>
            <label>
            Password:
            <input type="password" minLength="3" id="password" placeholder="Password" name="password" required onChange={(e) => setPass(e.target.value)} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}