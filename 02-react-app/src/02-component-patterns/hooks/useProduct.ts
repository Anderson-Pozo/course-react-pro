import { InitialValues, onChangeArgs, Product } from "02-component-patterns/interfaces/interfaces";
import { useEffect, useRef, useState } from "react";

type typeUseProduct = {
    counter: number;
    increseBy: (value: number) => void;
    maxCount?: number;
    isMaxCountReached: boolean;
}

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}


const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    
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

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return; 
        setCounter(value)
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, [])
    
    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increseBy,
        reset
    };
}

export default useProduct;