import BreadcrumbsSection from '../layouts/BreadcrumbsSection'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import HotDealsSection from '../layouts/HotDealsSection'
import MobileAccessoriesSection from '../layouts/MobileAccessoriesSection'
import MobilePhonesSection from '../layouts/MobilePhonesSection'
import MobilePhotoGraphyAccessoriesSection from '../layouts/MobilePhotoGraphyAccessoriesSection'
import SubCategorySection from '../layouts/SubCategorySection'
import TopBrandsSection from '../layouts/TopBrandsSection'

const SubCategoryPage = () => {
    return (
        <main>
            <Header />
            <BreadcrumbsSection />
            <Hero />
            <SubCategorySection />
            <HotDealsSection />
            <TopBrandsSection />
            <MobilePhonesSection />
            <MobileAccessoriesSection />
            <MobilePhotoGraphyAccessoriesSection />
        </main>
    )
}

export default SubCategoryPage
