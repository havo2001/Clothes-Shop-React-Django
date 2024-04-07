import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './category.css';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import ShowProducts from '../../components/showProducts/ShowProducts';

const Category = () => {
    return (
        <>
            <section className='category'>
            <Header />
                <BreadCrumbs />
                <div className='category__container container'>
                <ShowProducts cateName="All" />
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Category
