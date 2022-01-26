import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "02-component-patterns/components"

import coffee_mug from '../assets/coffee-mug.png';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

    const product = {
        id: '1',
        title: 'Coffee Mug',
        image: coffee_mug
    }

    return (
        <div>
            <h1>Shopping Page</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title="Vanilla coffee"/>
                    <ProductCard.Buttons/>
                </ProductCard>

                {/* Second way to structure component */}

                <ProductCard product={product} className="bg-dark">
                    <ProductImage className="custom-image"/>
                    <ProductTitle title="Coffee snack" className="text-white text-bold"/>
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    )
}
