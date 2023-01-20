import saverZoneIcon from '../../images/icons/saver-zone-icon.png'
import dealOfTheDayIcon from '../../images/icons/deal-of-the-day.png'
import cartIcon from '../../images/icons/cart-icon.png'

const FooterMobile = () => {
    return (
        <section className='bg-shopee-skyblue  p-2 px-3 max-w-8xl mx-auto  mt-10 fixed bottom-0 left-0 w-full lg:hidden'>
            <div className='flex justify-between items-center'>
                <a
                    className='flex flex-col items-center justify-center'
                    href='/#'
                >
                    <img src={saverZoneIcon} alt='Saver Zone' />
                    <p className='text-xs'>Saver Zone</p>
                </a>
                <a
                    className='flex flex-col items-center justify-center'
                    href='/#'
                >
                    <img src={dealOfTheDayIcon} alt='Deal of the Day' />
                    <p className='text-xs'>Deal of the Day</p>
                </a>
                <a
                    className='flex flex-col items-center justify-center relative'
                    href='/#'
                >
                    <div className='badge bg-shopee-red p-2  w-5 h-5 rounded-full absolute text-xs text-white flex items-center -right-2 -top-3'>
                        0
                    </div>
                    <img src={cartIcon} alt='Shopping Cart' />
                    <p className='text-xs'>Cart</p>
                </a>
            </div>
        </section>
    )
}

export default FooterMobile
