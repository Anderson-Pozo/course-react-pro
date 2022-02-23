import { InitialValues, onChangeArgs, Product } from "02-component-patterns/interfaces/interfaces";
import { useEffect, useRef, useState } from "react";

type typeUseProduct = {
    counter: number;
    increseBy: (value: number) => void,
    maxCount?: number
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
        increseBy,
        maxCount: initialValues?.maxCount
    };
}

export default useProduct;