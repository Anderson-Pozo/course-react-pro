import { useReducer } from "react";

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState ={
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterAction = 
    { type: 'increaseBy', payload: { value: number } } | 
    { type: 'reset'} 

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    const { counter, changes } = state;
    
    switch (action.type) {
        case 'increaseBy':
            return {
                counter: counter + action.payload.value,
                previous: counter,
                changes: changes +1,
            }
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        default:
            return state;
    }
}

export const CounterReducer = (): JSX.Element => {

    
    const [{ counter, changes, previous }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const onIncrease = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value } })
    }
    
    return (
        <>
            <h2>Counter Reducer {counter} </h2>
            <h5>Changes {changes} </h5>
            <h5>Previous {previous} </h5>
            <button
                onClick={ () => onIncrease(1) }
            >
                +1
            </button>
            <button
                onClick={ () => onIncrease(5) }
            >
                +5
            </button>
            <button
                onClick={ () => onIncrease(10) }
            >
                +10
            </button>
            <button
                onClick={ () => dispatch({ type: 'reset' }) }
            >
                Reset
            </button>
        </>
    )
}
