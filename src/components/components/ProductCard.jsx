import Label from '../components/Label'

const ProductCard = ({ product, discount }) => {
    return (
        <div className='card bg-white rounded-2xl md:rounded-xl overflow-hidden px-3 py-3 flex flex-col gap-2 h-full '>
            <img src={product.image} alt='Phone' />
            <p className='text-[.6875rem] md:text-[.875rem]'>{product.title}</p>
            <div className='inline-flex flex-col md:flex-row gap-1 md:gap-3 md:items-center '>
                <p className='font-bold'>AED {product.price}</p>
                <p className='line-through text-gray-400 j text-[.625rem] md:text-[.75rem]'>
                    AED {product.prevPrice}
                </p>
            </div>

            {
                // Check whether discount is set, if set, call the Label Component to display it.
                discount && <Label label={discount} />
            }
        </div>
    )
}

export default ProductCard
