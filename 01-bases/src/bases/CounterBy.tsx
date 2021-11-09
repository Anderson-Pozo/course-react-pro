import { useState } from "react"

interface Props {
    initialState?: number
}

type CounterState = {
    counter: number,
    clicks: number
}

export const CounterBy = ({ initialState = 5 }: Props): JSX.Element => {

    const [{ counter, clicks }, setCounter] = useState<CounterState>({
        counter: initialState,
        clicks: 0
    });

    const handleClick = (clic: number) => {
        setCounter(({counter, clicks}) =>({
            counter: counter + clic,
            clicks: clicks + 1
        }))
    }
    
    return (
        <>
            <h2>CounterBy {counter} </h2>
            <h2>Clicks {clicks} </h2>
            <button onClick={ () => handleClick(1) }>
                +1
            </button>
            <button onClick={ () => handleClick(5) }>
                +5
            </button>
        </>
    )
}
