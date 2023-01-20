import menuIcon from '../../images/icons/menu-icon.png'

const categories = [
    ['Perfume Fiesta', false],
    ['Back to School', false],
    ['Pre-Owned Products', false],
    ['Saver Zone', false],
    ['Deal of The Day', false],
    ['Tech Mania', true],
]

const Navbar = () => {
    return (
        <section className='border-b border-slate-300 text-[.75rem] lg:text-[1rem] font-["Open_Sans"] font-semibold'>
            <div className='md:max-w-8xl h-full mx-auto'>
                <div className='h-full'>
                    <ul className='flex flex-row mx-auto h-full gap-4 flex-nowrap overflow-x-auto no-scrollbar'>
                        <li className='py-2 h-full min-w-[130px] hover:bg-blue-200 focus:bg-blue-200 px-3'>
                            <a href='/#' className='flex items-center gap-1'>
                                <img
                                    className='bg-black'
                                    src={menuIcon}
                                    alt='Menu'
                                />{' '}
                                Category
                            </a>
                        </li>
                        {categories.map((category, index) => {
                            const active = category[1]
                            return (
                                <li
                                    key={index}
                                    className={`py-2 h-full min-w-[130px] hover:bg-blue-200 focus:bg-blue-200 px-3 ${
                                        active ? 'bg-yellow-400 text-black' : ''
                                    }`}
                                >
                                    <a href='/#'>{category[0]}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Navbar
