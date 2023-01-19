import Breadcrumbs from '../components/Breadcrumbs'

const breadCrumbsData = [
    {
        id: 1,
        link: 'Home',
        active: false,
    },
    {
        id: 2,
        link: 'Mobiles & Tablets',
        active: true,
    },
]

const BreadcrumbsSection = () => {
    return (
        <section className='max-w-8xl mx-auto p-1'>
            <Breadcrumbs breadcrumbs={breadCrumbsData} />
        </section>
    )
}

export default BreadcrumbsSection
