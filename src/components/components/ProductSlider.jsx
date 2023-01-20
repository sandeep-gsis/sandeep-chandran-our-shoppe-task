const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
]

const ProductSlider = () => {
    return (
        <div className="font-['Open_Sans]">
            <div className='flex justify-between'>
                <h2 className='font-bold md:text-[1.125rem]'>Mobiles Phones</h2>
                <a
                    className='bg-white text-shopee-blue py-1 px-2 font-bold text-[.75rem] rounded-sm'
                    href='/#'
                >
                    View All
                </a>
            </div>
            <div id='slide-container' className='w-full'>
                <div id='slider' className='flex w-full'></div>
            </div>
        </div>
    )
}

export default ProductSlider
