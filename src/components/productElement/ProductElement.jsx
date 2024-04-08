import React, { useState } from 'react';
import './productElement.css';
import { Link } from "react-router-dom";
import { categories } from '../../data/Categories';

const ProductElement = ({ id, productName, cateName, price, image, image_hover, colors }) => {
    const [isHovered, setIsHovered] = useState(false);
    const findUrlsByCateName = (categories, cateName) => {
        const matchedCategories = categories.filter(category => category.cateName === cateName);
        const url = matchedCategories.map(category => category.url);
        return url;
    };

    const url = findUrlsByCateName(categories, cateName);


    return (
        <div className="product__container">
            <Link to={`${url}/${id}`}>
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
                        to={`${url}/${colorObj.id}`}
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
