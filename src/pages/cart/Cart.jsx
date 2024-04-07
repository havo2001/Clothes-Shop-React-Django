import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import './cart.css';

const Cart = () => {
    return (
        <>
            <section className='cart'>
                <Header />
                <BreadCrumbs />
                <div className='cart__container'>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Cart
