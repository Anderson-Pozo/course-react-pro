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
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title="Vanilla coffee" className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                {/* Second way to structure component */}
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage 
                        className="custom-image"
                        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                    />
                    <ProductTitle title="Coffee snack" className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
                
                <ProductCard 
                    product={product}
                    style={{ backgroundColor: 'gray' }}
                >
                    <ProductImage 
                        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                    />
                    <ProductTitle 
                        style={{color: 'white', fontWeight: 'bold'}}
                    />
                    <ProductButtons 
                        style={{ display: 'flex', justifyContent: 'end'}}
                    />
                </ProductCard>
            </div>
        </div>
    )
}
