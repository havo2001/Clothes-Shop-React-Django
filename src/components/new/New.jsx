import React, { useState } from 'react'
import './new.css';
import { displayInNew } from '../../data/Categories';
import ShowProducts from '../showProducts/ShowProducts';


const New = () => {
    /* ------------------------ Get the current location ------------------------ */
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <section className='new'>
                <div className="new__container container">
                    <h2 className='new__title'>НОВИНКИ</h2>
                    <ul className='cat__list grid'>
                        <button className="cat__item">
                            <li className={isActive ? 'active-link active-cat' : ''} onClick={handleClick}>All</li>
                        </button>
                        {displayInNew.map((item) => (
                            <button className='cat__item'>
                                <li className={isActive ? 'active-link active-cat' : ''} onClick={handleClick}>
                                    {item.display}
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

export default New
