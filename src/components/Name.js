import React from 'react'
import { useDispatch } from 'react-redux'

export default function Name() {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch({
            type: "UPDATE",
            payload: event.target.value
        })
    }

    return (
        <div className="flex justify-center">
            <input 
                className="p-4 rounded border-2 border-red-300"
                placeholder="Tap text"
                onChange={handleChange}
            />
        </div>
    )
}
