import React, { useState } from 'react'
import './bestSeller.css';
import { categories } from '../../data/Categories';
import ShowProducts from '../showProducts/ShowProducts';


const BestSeller = () => {
    /* ------------------------ Get the current location ------------------------ */
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <section className='best-seller'>
                <div className="best-seller__container container">
                    <h2 className='best-seller__title'>BEST SELLER</h2>
                    <ul className='cat__list grid'>
                        <button className="cat__item">
                            <li className={isActive ? 'active-link active-cat' : ''} onClick={handleClick}>All</li>
                        </button>
                        {categories.map((item) => (
                            <button className='cat__item'>
                                <li className={isActive ? 'active-link active-cat' : ''} onClick={handleClick}>
                                    {item.cateName}
                                </li>
                            </button>
                        ))}
                    </ul>
                    <ShowProducts />
                </div>
            </section>
        </>
    )
}

export default BestSeller
