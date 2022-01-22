import { useState } from "react";

type typeUseProduct = {
    counter: number;
    increseBy: (value: number) => void
}

const useProduct = (): typeUseProduct => {
    const [counter, setCounter] = useState(0);

    const increseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0));
    };

    return {
        counter,
        increseBy
    };
}

export default useProduct;