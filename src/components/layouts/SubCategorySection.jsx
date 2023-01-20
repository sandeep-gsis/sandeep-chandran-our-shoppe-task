const subCategories = [
    {
        id: 1,
        image: require('../../images/sub-category/mobile-phones.png'),
        name: 'Mobile Phones',
    },
    {
        id: 2,
        image: require('../../images/sub-category/mobile-accessories.png'),
        name: 'Mobile Accessories',
    },
    {
        id: 3,
        image: require('../../images/sub-category/mobile-photography-accessories.png'),
        name: 'Mobile Photography Accessories',
    },
    {
        id: 4,
        image: require('../../images/sub-category/tablets.png'),
        name: 'Tablets',
    },
    {
        id: 5,
        image: require('../../images/sub-category/tablet-accessories.png'),
        name: 'Tablet Accessories',
    },
    {
        id: 6,
        image: require('../../images/sub-category/power-banks.png'),
        name: 'Power Banks',
    },
    {
        id: 7,
        image: require('../../images/sub-category/headphones-and-earphones.png'),
        name: 'Headphones and Earphones',
    },
]

const SubCategorySection = () => {
    return (
        <section className='px-3 sub-category max-w-8xl mx-auto  mt-10 '>
            <h1 className='uppercase text-center font-bold text-lg mb-4'>
                Sub Category
            </h1>

            <div className='flex items-center'>
                <ul className='flex flex-row mx-auto flex-nowrap gap-2 overflow-x-auto no-scrollbar'>
                    {subCategories.map((category) => {
                        return (
                            <li
                                key={category.id}
                                className='flex flex-col gap-2 sm:gap-5 w-[136px] sm:w-[180px] min-w-[136px] items-center'
                            >
                                <img
                                    className='w-full'
                                    src={category.image}
                                    alt={category.name}
                                />
                                <div className=''>
                                    <h2 className="sm:text-[1rem] text-[.75rem] font-['Poppins']">
                                        {category.name}
                                    </h2>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default SubCategorySection
