import React, { useState } from 'react';
import './productElement.css';
import { Link } from "react-router-dom";

const ProductElement = ({ id, productName, cateName, price, image, image_hover, colors }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="product__container">
            <Link to={`/category/${cateName.toLowerCase()}/${id}`}>
                <img
                    className="product__img"
                    src={isHovered ? image_hover : image}
                    alt="product_image"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
                <p className='product__name'>{productName}</p>
            </Link>
            <p className='product__price'>{price}</p>
            <div className="color-dots-container">
                {colors.map(colorObj => (
                    <Link
                        key={colorObj.color}
                        to={`/category/${cateName.toLowerCase()}/${colorObj.id}`}
                        className="color-link"
                    >
                        <span
                            className="color-dot"
                            style={{
                                backgroundColor: colorObj.color,
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                display: 'inline-block', 
                                marginRight: '5px'
                            }}
                        ></span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductElement;
