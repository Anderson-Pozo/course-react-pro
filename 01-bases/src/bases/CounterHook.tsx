import { useCounter } from "../hooks/useCounter"

export const CounterHook = (): JSX.Element => {

    const { handleClick, counter, counterElement } = useCounter({ maxCount: 15 })
    
    return (
        <>
            <h1>Counter Hook:</h1>
            <h2 ref={ counterElement }>{counter} </h2>
            <h2 ref={ counterElement }>Hello</h2>
            <button
                onClick={ handleClick }
            >
                +1
            </button>
        </>
    )
}
