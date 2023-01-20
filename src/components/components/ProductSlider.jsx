import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
;<style></style>

const ProductSlider = ({ productsData, productSectionName, viewAllLink }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(productsData)
    }, [productsData])
    return (
        <div className="font-['Open_Sans]">
            <div className='flex justify-between'>
                <h2 className='font-bold md:text-[1.125rem]'>
                    {productSectionName}
                </h2>
                <a
                    className='bg-white text-shopee-blue py-1 px-2 font-bold text-[.75rem] rounded-sm'
                    // {View All Link goes in the href}
                    href='/#'
                >
                    View All
                </a>
            </div>
            <div id='slide-container' className='w-full mt-3'>
                <div id='slider' className='flex w-full'>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        // slidesPerView={6}
                        // sliderPerGroup={2}
                        loop={true}
                        navigation={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            480: {
                                // width: 480,
                                slidesPerView: 3,
                            },
                            // when window width is >= 768px
                            768: {
                                // width: 768,
                                slidesPerView: 4,
                            },
                            1100: {
                                // width: 1100,
                                slidesPerView: 6,
                            },
                        }}
                    >
                        <ul>
                            {products.map((product) => {
                                // Setting the discount label , if discount does not exist set to null
                                const discount = product.discount
                                    ? `${product.discount}% Off`
                                    : null
                                return (
                                    <li key={product.id} className=''>
                                        <SwiperSlide
                                            className=''
                                            key={product.id}
                                        >
                                            <ProductCard
                                                product={product}
                                                discount={discount}
                                            />
                                        </SwiperSlide>
                                    </li>
                                )
                            })}
                        </ul>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ProductSlider
