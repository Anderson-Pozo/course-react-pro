import { ProductCard } from "02-component-patterns/components"

export const ShoppingPage = () => {

    const product = {
        id: '1',
        title: 'Coffee Mug',
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

                {/* <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle title="Hola"/>
                    <ProductButtons counter={0} increseBy={function (value: number): void {
                        throw new Error("Function not implemented.")
                    } }/>
                </ProductCard> */}
            </div>
        </div>
    )
}
