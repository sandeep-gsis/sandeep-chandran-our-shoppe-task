import Timer from '../components/Timer'

const HotDealsSection = () => {
    const hotDealsItems = [
        {
            id: 1,
            title: 'Xiaomi Redmi Buds 3 Pro Graphite Black',
            image: require('../../images/hot-deals/item-1-redmi-buds-3-pro.png'),
            price: 178.0,
        },
        {
            id: 2,
            title: 'Samsung Galaxy A53 Dual SIM Awesome White 6GB RAM 128GB 5G',
            image: require('../../images/hot-deals/item-2-samsung-galaxy-a53.png'),
            price: 1275.0,
        },
        {
            id: 3,
            title: 'Adidas AD-ZNE-01-NG True Wireless True Wireless Bluetooth Earbuds Night Grey',
            image: require('../../images/hot-deals/item-3-adidas-true-wireless.png'),
            price: 449.0,
        },
        {
            id: 4,
            title: 'Honor Pad X8 Lite 3GB 32GB 9.7 Inch FHD Display Neo Mint',
            image: require('../../images/hot-deals/item-4-honor-pad.png'),
            price: 475.0,
        },
    ]
    return (
        <section id='hot-deals-section' className='max-w-8xl mx-auto  mt-10'>
            <h1 className='uppercase text-center font-bold text-lg mb-4 mt-10'>
                Hot Deals
            </h1>

            <div className='flex'>
                <ul className='px-3 flex flex-nowrap gap-2 sm:gap-8 overflow-x-auto no-scrollbar'>
                    {hotDealsItems.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className=' flex flex-col items-center justify-between  min-w-[180px] sm:min-w-[290px] border border-shopee-orange rounded-xl'
                            >
                                <img
                                    className='w-3/4 '
                                    src={item.image}
                                    alt={item.title}
                                />
                                <Timer />
                                <div className='font-[Open_Sans] text-center px-[10px]'>
                                    <h2 className='sm:text-[.90rem] text-[.6875rem]  min-h-[3rem] my-1'>
                                        {item.title}
                                    </h2>
                                    <p className='font-extrabold  text-shopee-blue sm:text-[1.5rem]'>
                                        AED {item.price}.00
                                    </p>
                                    <button className='px-8 py-1 text-[.875rem] text-shopee-orange border-shopee-orange border my-3 rounded-md '>
                                        Add to Cart
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default HotDealsSection
