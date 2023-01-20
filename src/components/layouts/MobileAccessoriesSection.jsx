import ProductSlider from '../components/ProductSlider'

const phones = [
    {
        id: 1,
        title: 'Rohan Es-HT03 Wings Folding Electric Scooter...',
        image: require('../../images/mobile-accessories/product-1.png'),
        price: '1099.00',
        prevPrice: '1295.00',
        discount: '15%',
    },
    {
        id: 2,
        title: 'ONeill Polarized Aviator Sunglasses, ONS-DECK-11.',
        image: require('../../images/mobile-accessories/product-2.png'),
        price: '440.00',
        prevPrice: '1295.00',
        discount: '15',
    },
    {
        id: 3,
        title: 'Carrera PACE Sunglasses for Unisex Matte Black, Siz.',
        image: require('../../images/mobile-accessories/product-3.png'),
        price: '320.00',
        prevPrice: '1295.00',
        discount: '26',
    },
    {
        id: 4,
        title: 'RayBan RB4274 Mens Sunglasses Plastic, Nylon',
        image: require('../../images/mobile-accessories/product-4.png'),
        price: '729.00',
        prevPrice: '1295.00',
        discount: '11',
    },
    {
        id: 5,
        title: 'RayBan RB3025 Classic Gradient Aviator Sunglass..',
        image: require('../../images/mobile-accessories/product-5.png'),
        price: '409.00',
        prevPrice: '1295.00',
        discount: '10',
    },
    {
        id: 6,
        title: 'RayBan RB3025 Classic Gradient Aviator Sunglass..',
        image: require('../../images/mobile-accessories/product-6.png'),
        price: '409.00',
        prevPrice: '1295.00',
        discount: '10',
    },
]

const MobileAccessoriesSection = () => {
    return (
        <section className='bg-shopee-lightblue p-3 max-w-8xl mx-auto  mt-10'>
            <ProductSlider
                productsData={phones}
                productSectionName='Mobile Accessories'
                viewAllLink=''
            />
        </section>
    )
}

export default MobileAccessoriesSection
