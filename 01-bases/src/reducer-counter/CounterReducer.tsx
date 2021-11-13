import { useReducer } from 'react';
import * as actions from './actions';
import { CounterState } from './interfaces';
import { counterReducer } from './state/counterState';

const INITIAL_STATE: CounterState ={
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducer = (): JSX.Element => {

    const [{ counter, changes, previous }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const onIncrease = (value: number) => {
        dispatch(actions.doIncreaseBy(value))
    }
    
    return (
        <>
            <h2>Counter Reducer Segmentado {counter} </h2>
            <h5>Changes { changes } </h5>
            <h5>Previous { previous } </h5>
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
                onClick={ () => dispatch(actions.doReset()) }
            >
                Reset
            </button>
        </>
    )
}
