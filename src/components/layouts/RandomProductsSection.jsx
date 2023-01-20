import React from 'react'
import Label from '../components/Label'

const randomProducts = [
    {
        id: 1,
        title: 'Giorgio Armani Code Eau De Parfum, 110ml',
        image: require('../../images/random-products/product-1.png'),
        price: '349.00',
        prevPrice: '395.00',
        discount: '12',
    },
    {
        id: 2,
        title: 'Generic Camping Chair, 137511863',
        image: require('../../images/random-products/product-2.png'),
        price: '35.00',
        prevPrice: '50.00',
        discount: '30',
    },
    {
        id: 3,
        title: 'Funskool Dough Fun Pack -2532900',
        image: require('../../images/random-products/product-3.png'),
        price: '23.10',
        prevPrice: '28.00',
        discount: '18',
    },
    {
        id: 4,
        title: 'Sheen Analog Silver Stainless Steel Watch For Women, SHE-3054SPG..',
        image: require('../../images/random-products/product-4.png'),
        price: '389.00',
        prevPrice: '574.00',
        discount: '32',
    },
    {
        id: 5,
        title: 'Cabula Powered Fans For Tables',
        image: require('../../images/random-products/product-5.png'),
        price: '31.50',
        prevPrice: '50.00',
        discount: '3',
    },
    {
        id: 6,
        title: 'Giorgio Armani Code Eau De Parfum, 110ml',
        image: require('../../images/random-products/product-6.png'),
        price: '349.00',
        prevPrice: '395.00',
        discount: '12',
    },
    {
        id: 7,
        title: 'Generic Camping Chair, 137511863',
        image: require('../../images/random-products/product-7.png'),
        price: '35.00',
        prevPrice: '50.00',
        discount: '30',
    },
    {
        id: 8,
        title: 'Funskool Dough Fun Pack -2532900',
        image: require('../../images/random-products/product-8.png'),
        price: '23.10',
        prevPrice: '28.00',
        discount: '18',
    },
    {
        id: 9,
        title: 'Sheen Analog Silver Stainless Steel Watch For Women, SHE-3054SPG..',
        image: require('../../images/random-products/product-9.png'),
        price: '389.00',
        prevPrice: '574.00',
        discount: '32',
    },
    {
        id: 10,
        title: 'Cabula Powered Fans For Tables',
        image: require('../../images/random-products/product-10.png'),
        price: '31.50',
        prevPrice: '50.00',
        discount: '3',
    },
]

const RandomProductsSection = () => {
    return (
        <section className='bg-shopee-lightpink mt-10 py-8'>
            <div className='max-w-8xl mx-auto'>
                <ul className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row auto-rows-fr'>
                    {randomProducts.map((product) => {
                        const discount = product.discount
                            ? `${product.discount}% Off`
                            : null
                        return (
                            <li
                                key={product.id}
                                className='list-none rounded-lg overflow-hidden'
                            >
                                <div className='random-card flex flex-col gap-2 h-full p-3   bg-white'>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                    <div className='py-1 px-3 text-[.625rem] md:text-[.875rem] text-center bg-shopee-yellow text-black rounded-md font-semibold '>
                                        0% Interest on Debit Card
                                    </div>
                                    <p className='flex-1 text-[.6875rem] text-[.875]'>
                                        {product.title}
                                    </p>
                                    <div className='inline-flex flex-col md:flex-row gap-1 md:gap-3 md:items-center '>
                                        <p className='font-bold'>
                                            AED {product.price}
                                        </p>
                                        <p className='line-through text-gray-400 j text-[.625rem] md:text-[.75rem]'>
                                            AED {product.prevPrice}
                                        </p>
                                    </div>
                                    {
                                        // Check whether discount is set, if set, call the Label Component to display it.
                                        discount && <Label label={discount} />
                                    }
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default RandomProductsSection
