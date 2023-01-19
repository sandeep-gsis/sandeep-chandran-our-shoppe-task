import heroDesktop from '../../images/hero/hero-desktop.jpg'
import heroMobile from '../../images/hero/hero-mobile.jpg'

const Hero = () => {
    return (
        <section className='hero max-w-8xl mx-auto'>
            <picture className='w-full'>
                <source media='(max-width: 640px)' srcSet={heroMobile} />

                <img className='w-full' src={heroDesktop} alt='Banner' />
            </picture>
        </section>
    )
}

export default Hero
