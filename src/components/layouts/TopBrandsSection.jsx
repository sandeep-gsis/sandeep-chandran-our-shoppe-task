const topBrands = [
    {
        id: 1,
        image: require('../../images/top-brands/brand-apple.png'),
        name: 'Apple',
    },
    {
        id: 2,
        image: require('../../images/top-brands/brand-xtouch.png'),
        name: 'XTouch',
    },
    {
        id: 3,
        image: require('../../images/top-brands/brand-vivo.png'),
        name: 'Vivo',
    },
    {
        id: 4,
        image: require('../../images/top-brands/brand-oppo.png'),
        name: 'Oppo',
    },
    {
        id: 5,
        image: require('../../images/top-brands/brand-mi.png'),
        name: 'Mi',
    },
    {
        id: 6,
        image: require('../../images/top-brands/brand-alcatel.png'),
        name: 'Alcatel',
    },
    {
        id: 7,
        image: require('../../images/top-brands/brand-samsung.png'),
        name: 'Samsung',
    },
    {
        id: 8,
        image: require('../../images/top-brands/brand-oneplus.png'),
        name: 'One Plus',
    },
]

const Brands = () => {
    return (
        <div className='flex items-center '>
            <ul className='flex flex-row mx-auto flex-nowrap gap-2 overflow-x-auto no-scrollbar md:flex-wrap'>
                {topBrands.map((brand) => {
                    return (
                        <li
                            key={brand.id}
                            className='flex items-center border border-shopee-purple rounded-xl p-5 gap-2 sm:gap-5  min-w-[151px]'
                        >
                            <img
                                className='w-full'
                                src={brand.image}
                                alt={brand.name}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const TopBrandsSection = () => {
    return (
        <section className='px-3 sub-category max-w-8xl mx-auto  mt-10 '>
            <h1 className='uppercase text-center font-bold text-lg mb-4'>
                Top Brands
            </h1>
            <div className='mt-5'>
                <Brands />
            </div>
            <div className='mt-5 hidden md:visible '>
                <Brands />
            </div>
        </section>
    )
}

export default TopBrandsSection
