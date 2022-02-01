import { onChangeArgs, Product } from "02-component-patterns/interfaces/interfaces";
import { useState } from "react";

type typeUseProduct = {
    counter: number;
    increseBy: (value: number) => void
}

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
}


const useProduct = ({ onChange, product }: useProductArgs): typeUseProduct => {
    const [counter, setCounter] = useState(0);

    const increseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    };

    return {
        counter,
        increseBy
    };
}

export default useProduct;