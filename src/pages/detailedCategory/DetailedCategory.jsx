import React from 'react'
import './detailedCategory.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import ShowProducts from '../../components/showProducts/ShowProducts';
import Page404 from '../page404/Page404';
import { products, colors } from '../../data/TestUI';

const DetailedCategory = () => {
    const status = 200;
    return (
        <> {status === 200 ?
            <section className='detailed-category'>
                <Header />
                <BreadCrumbs />
                <div className='detailed-category__container container'>
                    <ShowProducts products={products} colors={colors}/>
                </div>
                <Footer />
            </section> :
            <Page404 />}
        </>
    )
}

export default DetailedCategory
