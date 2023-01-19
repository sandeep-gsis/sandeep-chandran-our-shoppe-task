import ourShopeeLogo from '../../images/logo.png'
import arrowDown from '../../images/icons/arrow-down-icon.svg'
import searchIcon from '../../images/icons/search-icon.svg'
import uaeFlag from '../../images/icons/uae-flag-icon.svg'
import avatarIcon from '../../images/icons/avatar-icon.svg'
import cartIcon from '../../images/icons/cart-icon.svg'

const Header = () => {
    return (
        <header className=' h-14 bg-gradient-to-r from-shopee-purple to-shopee-blue'>
            <div className='max-w-sm md:max-w-8xl h-full mx-auto flex items-center justify-between gap-4'>
                <img src={ourShopeeLogo} alt='Our Shopee' />
                <div className='search-box relative  flex '>
                    <button
                        type='submit'
                        className='absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-transparent'
                    >
                        <img className='' src={searchIcon} alt='' />
                    </button>

                    <input type='text' className='rounded-md h-10 w-full ' />
                </div>
                <div className='flex items-center justify-between'>
                    {/* <p>العربية</p>
                    <button className='bg-transparent flex gap-2 items-center'>
                        UAE
                        <img
                            className='text-white'
                            src={arrowDown}
                            alt='Arrow Down'
                        />
                    </button> */}
                    <div className='relative flex items-center gap-3'>
                        {/* <img
                            className='absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-transparent'
                            // src={arrowDown}
                            alt=''
                        /> */}
                        <img src={uaeFlag} alt='UAE Flag' />
                        <select
                            style={{ backgroundImage: `url(${arrowDown})` }}
                            className='bg-transparent text-white appearance-none bg-no-repeat  bg-[center_right_.25rem] pr-5 outline-none'
                        >
                            <option className='text-black ' value='UAE'>
                                UAE
                            </option>
                            <option className='text-black ' value='IND'>
                                India
                            </option>
                            <option className='text-black ' value='Oman'>
                                Oman
                            </option>
                        </select>
                        <div className='flex gap-2 items-center text-white '>
                            <a href='/#'>
                                <img
                                    className='w-7 h-7'
                                    src={avatarIcon}
                                    alt='Avatar'
                                />
                            </a>
                            <a href='/#'>Sign In</a>
                            <span>/</span>
                            <a href='/#'>Sign Up</a>
                            <a href='/#'>
                                <img src={cartIcon} alt='Shopping Cart' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </header>
    )
}

export default Header
