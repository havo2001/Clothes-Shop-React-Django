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

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }


    return (
        <div className="product__container">
            <Link to={`${url}/${id}`} onClick={scrollToTop}>
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
            <div className="element-color-dots-container">
                {colors.map(colorObj => (
                    <Link
                        key={colorObj.color}
                        to={`${url}/${colorObj.id}`}
                        className="color-link"
                        onClick={scrollToTop}
                    >
                        <svg className="element-color-dot" viewBox="0 0 14 14" width="14" height="14">
                            <circle cx="7" cy="7" r="6" fill={colorObj.color} />
                        </svg>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductElement;
