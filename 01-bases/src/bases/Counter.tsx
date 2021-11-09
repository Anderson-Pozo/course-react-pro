import { useState } from "react"

interface Props {
    initialState?: number
}

type PropsCounter = {
    initialState: number
}

export const Counter = ({ initialState = 0 }: Props): JSX.Element => {

    const [counter, setCounter] = useState(initialState);
    
    return (
        <>
            <h2>Counter {counter} </h2>
            <button
                onClick={ () => setCounter( prev => prev + 1) }
            >
                +1
            </button>
        </>
    )
}
