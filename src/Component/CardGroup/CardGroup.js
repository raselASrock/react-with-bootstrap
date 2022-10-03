import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'MacBook-Pro', price: 145000},
        {id: 2, name: 'MacBook-Cro', price: 155000},
        {id: 3, name: 'MacBook-Gro', price: 165000}
    ]
    return (
        <div className="card-group">
            {
                products.map(product => <Card key={product.id} product = {product}></Card>)
            }
        </div>
    );
};

export default CardGroup;