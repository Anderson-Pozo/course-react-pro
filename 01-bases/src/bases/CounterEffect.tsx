import { useEffect, useState } from 'react';

const MAXIMUN_COUNT = 10;


export const CounterEffect = (): JSX.Element => {

    const [counter, setCounter] = useState(5);

    useEffect(() => {
        if (counter < 10) return;
        
        console.log('%cSe llegó al valor máximo', 'color: red; background-color: black');

    }, [counter])

    const handleClick = () => {
        setCounter( prev => Math.min(prev +1, MAXIMUN_COUNT))
    }
    
    return (
        <>
            <h2>Counter Effect {counter} </h2>
            <button
                onClick={ handleClick }
            >
                +1
            </button>
        </>
    )
}
