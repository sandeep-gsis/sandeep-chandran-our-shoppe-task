import rightArrow from '../../images/icons/arrow-right-icon.svg'

const Breadcrumbs = ({ breadcrumbs }) => {
    const breadcrumbsLinks = breadcrumbs.map((breadCrumb, index) => {
        return (
            <li key={breadCrumb.id} className='flex items-center'>
                <a
                    href='/#'
                    className={`flex items-center text-[.55rem]   text-gray-500 hover:font-medium focus:font-medium focus:text-black ${
                        breadCrumb.active ? ' font-bold text-gray-900' : ''
                    }`}
                >
                    {breadCrumb.link}
                </a>
                <img
                    className={`breadcrumb-icon mx-3  ${
                        index === breadcrumbs.length - 1 ? 'hidden' : ''
                    }`}
                    src={rightArrow}
                    alt='Right Arrow'
                />
            </li>
        )
    })

    return (
        <nav className='flex' aria-label='Breadcrumb'>
            <ol className='flex flex-wrap items-center  '>
                {breadcrumbsLinks}
            </ol>
        </nav>
    )
}

export default Breadcrumbs
