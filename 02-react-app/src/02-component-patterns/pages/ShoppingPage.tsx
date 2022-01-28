import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "02-component-patterns/components"

import '../styles/custom-styles.css';

export const ShoppingPage = () => {

    const products = [
        { id: '1', title: 'Coffee Mug', image: './coffee-mug.png'},
        { id: '2', title: 'Coffee Mug-Meme', image: './coffee-mug2.png'}
    ]

    return (
        <div>
            <h1>Shopping Page</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={products[0]} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title="Vanilla coffee" className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                {/* Second way to structure component */}
                <ProductCard product={products[1]} className="bg-dark text-white">
                    <ProductImage 
                        className="custom-image"
                        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                    />
                    <ProductTitle className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
            </div>
        </div>
    )
}
