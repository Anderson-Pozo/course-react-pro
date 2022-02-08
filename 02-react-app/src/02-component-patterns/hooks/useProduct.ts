import { onChangeArgs, Product } from "02-component-patterns/interfaces/interfaces";
import { useEffect, useState } from "react";

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

    const increseBy = (value: number) => {
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