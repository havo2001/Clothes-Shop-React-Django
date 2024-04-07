import React from 'react'
import './detailedCategory.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import ShowProducts from '../../components/showProducts/ShowProducts';

const DetailedCategory = () => {
    return (
        <>
            <section className='detailed-category'>
                <Header />
                <BreadCrumbs />
                <div className='detailed-category__container container'>
                <ShowProducts cateName="All" />
                </div>
                <Footer />
            </section>
        </>
    )
}

export default DetailedCategory
