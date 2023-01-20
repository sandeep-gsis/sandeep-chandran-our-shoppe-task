import BreadcrumbsSection from '../layouts/BreadcrumbsSection'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import HotDealsSection from '../layouts/HotDealsSection'
import MobilePhonesSection from '../layouts/MobilePhonesSection'
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
        </main>
    )
}

export default SubCategoryPage
