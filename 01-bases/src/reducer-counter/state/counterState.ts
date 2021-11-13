import { CounterAction } from '../actions';
import { CounterState } from '../interfaces';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    const { counter, changes } = state;
    
    switch (action.type) {
        case 'increaseBy':
            return {
                counter: counter + action.payload.value,
                previous: counter,
                changes: changes + 1,
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