import ourShopeeLogo from '../../images/logo.png'
import arrowDown from '../../images/icons/arrow-down-icon.svg'
import searchIcon from '../../images/icons/search-icon.svg'
import uaeFlag from '../../images/icons/uae-flag-icon.svg'
import avatarIcon from '../../images/icons/avatar-icon.svg'
import cartIcon from '../../images/icons/cart-icon.svg'
import menuIcon from '../../images/icons/menu-icon.png'

const Header = () => {
    return (
        <header className=' h-28 md:h-14 bg-gradient-to-r from-shopee-purple to-shopee-blue'>
            <div className='max-w-sm md:max-w-8xl h-full mx-auto '>
                <div className='relative h-full flex flex-col md:flex-row  md:items-center md:justify-between  '>
                    <div className='flex gap-1 items-center'>
                        <img
                            src={menuIcon}
                            alt='Menu'
                            className='lg:hidden ml-3'
                        />
                        <img src={ourShopeeLogo} alt='Our Shopee' />
                    </div>
                    <div className='search-box mt-2 md:mt-0 w-[95%] self-center md:order-2   relative   justify-center md:max-w-[40%]  md:flex md:grow'>
                        <button
                            type='submit'
                            className='absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-transparent'
                        >
                            <img className='' src={searchIcon} alt='' />
                        </button>

                        <input
                            type='text'
                            placeholder='What are you looking for?'
                            className='rounded-md h-10 w-full  '
                        />
                    </div>
                    <div className='absolute right-1 top-2  md:right-0 md:top-0 md:relative flex items-center order-2 md:order-3  '>
                        <div className='relative flex   grow md:ml-auto items-center gap-3'>
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
                            <div className='hidden  lg:flex gap-2   items-center text-white '>
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
            </div>
            <div></div>
        </header>
    )
}

export default Header
