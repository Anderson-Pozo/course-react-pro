import { onChangeArgs, Product } from "02-component-patterns/interfaces/interfaces";
import { useEffect, useRef, useState } from "react";

type typeUseProduct = {
    counter: number;
    increseBy: (value: number) => void
}

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}


const useProduct = ({ onChange, product, value = 0 }: useProductArgs): typeUseProduct => {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange);

    const increseBy = (value: number) => {

        if (isControlled.current) {
            return onChange!({count: value, product})
        }
        
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    };

    useEffect(() => {
        setCounter(value)
    }, [value]);


    return {
        counter,
        increseBy
    };
}

export default useProduct;