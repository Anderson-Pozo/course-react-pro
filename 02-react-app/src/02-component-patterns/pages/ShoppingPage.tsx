import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "02-component-patterns/components"
import { products } from "02-component-patterns/data/products";
import { useShoppingCart } from "02-component-patterns/hooks/useShoppingCart";

import '../styles/custom-styles.css';

export const ShoppingPage = () => {

    const { onProductCardChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard 
                            product={product} 
                            className="bg-dark text-white" 
                            key={product.id}
                            onChange={ onProductCardChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage
                                className="custom-image"
                                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                            />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">
                {
                    Object.values(shoppingCart).map(product => (
                        <ProductCard
                            product={product} 
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            key={product.id}
                            value={product.count}
                            onChange={ onProductCardChange }
                        >
                            <ProductImage
                                className="custom-image"
                                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                            />
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
