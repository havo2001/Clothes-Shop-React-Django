import React, { useState } from 'react'
import './new.css';
import { displayInNew } from '../../data/Categories';
import ShowProducts from '../showProducts/ShowProducts';
import { products, colors } from '../../data/TestUI';
import ProductElement from '../productElement/ProductElement';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const New = () => {
    /* ------------------------ Get the current location ------------------------ */
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <section className='new'>
                <div className="new__container container">
                    <h2 className='new__title'>НОВИНКИ</h2>
                    <ul className='cat__list grid'>
                        <div className={isActive ? 'active-cat cat-item__container' : 'cat-item__container'} onClick={handleClick}>
                            <button className="cat__item">
                                <p>Все</p>
                            </button>
                        </div>
                        {displayInNew.map((item) => (
                            <div className={isActive ? 'cat-item__container' : 'cat-item__container'} onClick={handleClick}>
                                <button className='cat__item'>
                                    <p>
                                        {item.display}
                                    </p>
                                </button>
                            </div>
                        ))}
                    </ul>
                    <div className='product-card-slider__container'>
                        <Slider {...settings}>
                            {products.map((product, index) => (
                                <ProductElement
                                    key={product.id}
                                    id={product.id}
                                    productName={product.productName}
                                    cateName={product.cateName}
                                    price={product.price}
                                    image={product.image}
                                    image_hover={product.image_hover}
                                    colors={colors[index].map(colorObj => colorObj)}
                                    tag={product.tag}
                                />
                            ))}
                        </Slider>
                    </div>
                    {/* <ShowProducts /> */}
                </div>
            </section >
        </>
    )
}

export default New
