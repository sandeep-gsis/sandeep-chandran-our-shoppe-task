import logo from '../../images/logo.png'
import sendIcon from '../../images/icons/send-icon.png'
import customerRights from '../../images/customer-rights.png'
import socialFacebook from '../../images/icons/social-facebook.png'
import socialTwitter from '../../images/icons/social-twitter.png'
import socialInstagram from '../../images/icons/social-instagram.png'
import appStoreGoogle from '../../images/icons/appstore-google.png'
import appStoreApple from '../../images/icons/appstore-apple.png'
import cashType from '../../images/icons/cash-type.png'

const FooterDesktop = () => {
    return (
        <>
            <div className='footer-top bg-shopee-skyblue text-black hidden lg:block pb-10'>
                <section className='max-w-8xl mx-auto'>
                    <div className='grid grid-cols-6 text-[.90rem]'>
                        <div>
                            <h2 className='font-bold mb-3 pt-10'>
                                Mobiles & Tablets
                            </h2>
                            <ul className='flex flex-col gap-0.5'>
                                <li>
                                    <a href='/#'>Mobile Phones</a>
                                </li>
                                <li>
                                    <a href='/#'>Mobile Accessories</a>
                                </li>
                                <li>
                                    <a href='/#'>
                                        Mobile Photography Accessories
                                    </a>
                                </li>
                                <li>
                                    <a href='/#'>Tablets</a>
                                </li>
                                <li>
                                    <a href='/#'>Power Banks</a>
                                </li>
                                <li>
                                    <a href='/#'>Headphones & Earphones</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold mb-3 pt-10'>
                                Laptops & Computers
                            </h2>
                            <ul className='flex flex-col gap-0.5'>
                                <li>
                                    <a href='/#'>Laptops</a>
                                </li>
                                <li>
                                    <a href='/#'>Desktop Computers</a>
                                </li>
                                <li>
                                    <a href='/#'>PC Components</a>
                                </li>
                                <li>
                                    <a href='/#'>Drives & Storage</a>
                                </li>
                                <li>
                                    <a href='/#'>Networking</a>
                                </li>
                                <li>
                                    <a href='/#'>Software</a>
                                </li>
                                <li>
                                    <a href='/#'>Computer Accessories</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold mb-3 pt-10'>
                                Gaming & Accessories
                            </h2>
                            <ul className='flex flex-col gap-0.5'>
                                <li>
                                    <a href='/#'>Gaming Chairs & Desks</a>
                                </li>
                                <li>
                                    <a href='/#'>Gaming PC Accessories</a>
                                </li>
                                <li>
                                    <a href='/#'>Gaming PC & Components</a>
                                </li>
                                <li>
                                    <a href='/#'>Gaming Consoles</a>
                                </li>
                                <li>
                                    <a href='/#'>Gaming Consoles Accessories</a>
                                </li>
                                <li>
                                    <a href='/#'>Video Games</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold mb-3 pt-10'>
                                Electronics
                            </h2>
                            <ul className='flex flex-col gap-0.5'>
                                <li>
                                    <a href='/#'>Speakers & Audio Devices</a>
                                </li>
                                <li>
                                    <a href='/#'>Projector & Accessories</a>
                                </li>
                                <li>
                                    <a href='/#'>Television & Accessories</a>
                                </li>
                                <li>
                                    <a href='/#'>Torches & Emergency</a>
                                </li>
                                <li>
                                    <a href='/#'>Printers, Scanner & Copiers</a>
                                </li>
                                <li>
                                    <a href='/#'>Printer Accessories</a>
                                </li>
                                <li>
                                    <a href='/#'>Telephones & Communication</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold mb-3 pt-10'>
                                Home Appliances
                            </h2>
                            <ul className='flex flex-col gap-0.5'>
                                <li>
                                    <a href='/#'>
                                        Food Preparation & Kitchenwares
                                    </a>
                                </li>
                                <li>
                                    <a href='/#'>Heating, Cooling & Air</a>
                                </li>
                                <li>
                                    <a href='/#'>Blenders And Juicers</a>
                                </li>
                                <li>
                                    <a href='/#'>Coffee,Tea & Espresso</a>
                                </li>
                                <li>
                                    <a href='/#'>Ovens And Toasters</a>
                                </li>
                                <li>
                                    <a href='/#'>Irons And Steamers</a>
                                </li>
                                <li>
                                    <a href='/#'>Vacuums & Floor Care</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold mb-3 pt-10'>Pre Owned</h2>
                            <ul className='flex flex-col gap-0.5'>
                                <li>
                                    <a href='/#'>Pre-Owned Mobiles</a>
                                </li>
                                <li>
                                    <a href='/#'>TabPre-Owned Laptopslets</a>
                                </li>
                                <li>
                                    <a href='/#'>Pre-Owned Printers</a>
                                </li>
                                <li>
                                    <a href='/#'>Pre-Owned Tablets</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div className='footer-bottom bg-shopee-darkblue text-white py-8 hidden lg:block'>
                <section className=' max-w-8xl mx-auto    '>
                    <div className='grid grid-cols-3 gap-32 pb-10'>
                        <div className='flex flex-col gap-3'>
                            <img
                                className='self-start'
                                src={logo}
                                alt='Our Shoppe'
                            />
                            <p className='text-xs max-w-[70%]'>
                                Ourshopee.com is one of the leading and
                                fast-growing virtual shopping website with
                                strong presence in UAE, Oman, Qatar, Bahrain and
                                Kuwait.
                            </p>
                            <img
                                className='self-start'
                                src={customerRights}
                                alt='Customer Rights'
                            />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-[1.25rem] font-bold'>
                                    Connect with Us
                                </h2>
                                <div className='flex gap-6'>
                                    <img src={socialFacebook} alt='Facebook' />
                                    <img src={socialTwitter} alt='Twitter' />
                                    <img
                                        src={socialInstagram}
                                        alt='Instagram'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <h2 className='text-[1.25rem] font-bold'>
                                    24/7 Customer Support
                                </h2>
                                <p className='text-xs'>
                                    Ourshopee support team is hard working 24/7
                                    for our customers. We give high priority to
                                    troubleshoot and sort out all the complaints
                                    and issues of our customers. We will provide
                                    entire support till your face smiles.
                                </p>
                            </div>
                            <div>
                                <h2 className='text-[1.25rem] font-bold'>
                                    We're always here to help you
                                </h2>
                                <p className='text-xs'>
                                    Reach out to us through any of these support
                                    channels
                                </p>
                            </div>
                            <div className='flex gap-3'>
                                <div>
                                    <p>Hotline:</p>
                                    <p>WhatsApp:</p>
                                    <p>E-mail:</p>
                                </div>
                                <div>
                                    <p>(971) 4 2582959</p>
                                    <p>(971)52 1740943</p>
                                    <p>support@ourshopee.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-[1.25rem] font-bold'>
                                    News letter
                                </h2>
                                <div className='search-box relative  flex overflow-hidden '>
                                    <button
                                        type='submit'
                                        className='absolute right-0 top-1/2 -translate-y-1/2 rounded-r-md bg-blue-600 p-3 border-transparent'
                                    >
                                        <img
                                            className=''
                                            src={sendIcon}
                                            alt=''
                                        />
                                    </button>

                                    <input
                                        type='text'
                                        className='rounded-md h-10 w-full  overflow-hidden'
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-[1.25rem] font-bold'>
                                    Download our App
                                </h2>
                                <div className='flex gap-3'>
                                    <img
                                        src={appStoreGoogle}
                                        alt='Get it on Google Play'
                                    />
                                    <img
                                        src={appStoreApple}
                                        alt='Download on the App Store'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-t border-b border-slate-600 py-8'>
                        <ul className='flex justify-between [&>li]:border-r [&>li]:pr-3     border-slate-600'>
                            <li>
                                <a href='/#'>About Ourshopee</a>
                            </li>
                            <li>
                                <a href='/#'>Site Map</a>
                            </li>
                            <li>
                                <a href='/#'>Submit a Review</a>
                            </li>
                            <li>
                                <a href='/#'>Warranty & Return Policy</a>
                            </li>
                            <li>
                                <a href='/#'>privacy policy</a>
                            </li>
                            <li>
                                <a href='/#'>Terms and Conditions</a>
                            </li>
                            <li>
                                <a href='/#'>Our Blog</a>
                            </li>
                            <li>
                                <a href='/#'>Contact Us</a>
                            </li>
                            <li>
                                <a href='/#'>FAQs</a>
                            </li>
                            <li>
                                <a href='/#'>Sell With Us</a>
                            </li>
                            <li className='last:border-r-0'>
                                <a href='/#'>Affiliate Program</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center pt-8 pb-4'>
                        <img
                            src={cashType}
                            alt='Visa Master-Card Cash Payment'
                        />

                        <div>
                            <p>
                                Copyright © 2022 ourshopee.com. All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FooterDesktop
