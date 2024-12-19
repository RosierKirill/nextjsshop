import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="product-card flex border p-4 rounded-lg shadow-lg">
            {/* Image */}
            <div className="image-container">
                <img
                    src={product.image || '/default-product-image.jpg'}
                    alt={product.name}
                    className="product-image object-cover w-48 h-48 rounded-md"
                />
            </div>
            <div>
                {/* Product details */}
                <div className="product-details flex-1 ml-4">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-lg font-bold text-green-600">{product.price}€</p>

                    {/* Add to cart button */}
                    <button
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;
