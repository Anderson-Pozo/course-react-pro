import { InitialValues, onChangeArgs, Product } from "02-component-patterns/interfaces/interfaces";
import { useEffect, useRef, useState } from "react";

type typeUseProduct = {
    counter: number;
    increseBy: (value: number) => void
}

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}


const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs): typeUseProduct => {
    
    const [counter, setCounter] = useState<number>(initialValues?.count || value );
    const isMounted = useRef(false);

    console.log(initialValues?.count);

    const increseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount) 
        }
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    };

    useEffect(() => {
        if (!isMounted.current) return; 
        setCounter(value)
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, [])
    
    return {
        counter,
        increseBy
    };
}

export default useProduct;