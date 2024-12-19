import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Remplacez ceci par votre propre logique d'appel API
        // Ici, on simule une récupération de produits
        const fetchedProducts = [
            { id: 1, name: 'Produit 1', description: 'Description produit 1', price: 25, image: '/images/product1.jpg' },
            { id: 2, name: 'Produit 2', description: 'Description produit 2', price: 30, image: '/images/product2.jpg' },
            // Ajouter plus de produits ici
        ];
        setProducts(fetchedProducts);
    }, []);

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
