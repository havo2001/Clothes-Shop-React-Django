import React from 'react';
import './productPage.css';
import { Link, useLocation } from "react-router-dom";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Products } from '../../data/Products';

const ProductPage = () => {
    const location = useLocation();

    let currentLink = '';

    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index, array) => {
            // Capitalize the first character of the crumb
            currentLink += `/${crumb}`;
            const capitalizedCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);

            // If it's the last crumb, set it to productName
            const productName = index === array.length - 1 ? Products.find(product => product.id === parseInt(crumb)).productName : capitalizedCrumb;

            // Create the link
            

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{productName}</Link>
                </div>
            );
        });

    return (
        <>
            <section className='product-page'>
                <Header />
                <div className='product__breadcrumbs'>
                    {crumbs}
                </div>
                <div className='product-page__container container'>
                    <h1>Product</h1>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default ProductPage
