import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}€</span>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
        </div>
    );
}

export default ProductCard;

