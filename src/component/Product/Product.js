import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Style from './Product.css';

const Product = (props) => {
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product" >
            <div>
                <img src={img} alt="" />
            
            </div>
            <div>
            <h4 className='product_name' >{name}</h4>
            <br />
            <p><small>by:{seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} Left In Stock -Order Soon</small></p>
            <button className='add_cart_btn' 
                onClick={() => props.handleAddProduct(props.product)}
                >
                <FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
           
        </div>
    );
};

export default Product;