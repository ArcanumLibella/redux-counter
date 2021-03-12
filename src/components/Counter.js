import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Counter() {

    // Connexion du composant au store (si un seul state):
    // const counter = useSelector(state => state.counter)
    // Si plusieurs states :
    const {counter, name} = useSelector(state => ({
        ...state.counterReducer,
        ...state.nameReducer
    }))

    // Pour permettre d'envoyer des actions au reducer
    const dispatch = useDispatch()

    const incrementCount = () => {
        dispatch({
            type: 'INCREMENTE'
        })
    }

    const decrementCount = () => {
        dispatch({
            type: 'DECREMENTE'
        })
    }

    const resetCount = () => {
        dispatch({
            type: 'RESET'
        })
    }

    return (
        <div className="counter container flex flex-col justify-center p-4 mt-8">
            <h2 className="text-4xl text-center font-black">{counter}</h2>
            <div className="flex justify-center">
                <button 
                    className="p-4 m-4 bg-red-400 uppercase rounded font-bold"
                    onClick={incrementCount}
                >
                    +
                </button>
                <button 
                    className="p-4 m-4 bg-red-400 uppercase rounded font-bold"
                    onClick={decrementCount}
                >
                    -
                </button>
                <button 
                    className="p-4 m-4 bg-red-400 uppercase rounded font-bold"
                    onClick={resetCount}
                >
                    Reset
                </button>
            </div>
            <h3 className="text-2xl text-center font-black">{name}</h3>
        </div>
    )
}
