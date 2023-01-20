import BreadcrumbsSection from '../layouts/BreadcrumbsSection'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import HotDealsSection from '../layouts/HotDealsSection'
import MobileAccessoriesSection from '../layouts/MobileAccessoriesSection'
import MobilePhonesSection from '../layouts/MobilePhonesSection'
import MobilePhotoGraphyAccessoriesSection from '../layouts/MobilePhotoGraphyAccessoriesSection'
import Navbar from '../layouts/Navbar'
import RandomProductsSection from '../layouts/RandomProductsSection'
import SubCategorySection from '../layouts/SubCategorySection'
import TopBrandsSection from '../layouts/TopBrandsSection'

const SubCategoryPage = () => {
    return (
        <main>
            <Header />
            <Navbar />
            <BreadcrumbsSection />
            <Hero />
            <SubCategorySection />
            <HotDealsSection />
            <TopBrandsSection />
            <MobilePhonesSection />
            <MobileAccessoriesSection />
            {/* // Mobile Photography Accessories Section */}
            <MobilePhotoGraphyAccessoriesSection />
            <RandomProductsSection />
            <Footer />
        </main>
    )
}

export default SubCategoryPage
