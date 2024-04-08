import React from 'react';
import './productPage.css';
import { Link, useLocation } from "react-router-dom";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Products } from '../../data/Products';
import { breadCrumbsDisplay } from '../../data/Categories';


const testProduct = {
    id: 1,
    model_id: 1,
    productName: "Свитшот-платье",
    cateNameRussian: "Платья",
    price: "1000₽",
    color: "#373737",
    size: "S",
    quantity: 5,
    image: "/assets/products/1.jpg",
    image_hover: "/assets/products/1_hover.jpg",
    image_detail1: "/assets/products/1_detail1.jpg",
    image_detail2: "/assets/products/1_detail2.jpg"
}

const modelOptions = [
    {
        id: 1,
        color: "#373737",
        size: 'S',
    },
    {
        id: null,
        color: "#FFF200",
        size: 'M',

    },
    {
        id: 2,
        color: "#7E84F7",
        size: 'M',
    }
]

const sizes = [
    {
        size: "S",
    },
    {
        size: "M",

    },
    {
        size: "L",
    }
]



const ProductPage = () => {
    const location = useLocation();

    let currentLink = '';


    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index, array) => {
            currentLink += `/${crumb}`;
            const breadcrumbInfo = breadCrumbsDisplay.find(item => item.crumb === crumb);
            const display = breadcrumbInfo ? breadcrumbInfo.display : crumb;

            // If it's the last crumb, set it to productName
            const productName = index === array.length - 1 ? Products.find(product => product.id === parseInt(crumb)).productName : display;

            // Create the link


            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{productName}</Link>
                </div>
            );
        });

    const handleSmallImageClick = (event) => {
        const clickedImage = event.target;
        const largeImage = document.querySelector('.product-image__large');

        if (clickedImage.classList.contains('product-image')) {
            largeImage.src = clickedImage.src;

            const smallImages = document.querySelectorAll('.product-image');
            smallImages.forEach(image => image.classList.remove('selected'));
            clickedImage.classList.add('selected');
        }
    };

    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const currentId = pathSegments.pop();
    const url = window.location.origin + '/' + pathSegments.join('/');



    return (
        <>
            <section className='product-page'>
                <Header />
                <div className='product__breadcrumbs'>
                    {crumbs}
                </div>


                <div className='product-page__container container grid'>
                    {/* Images displace */}
                    <div className='product-image__container'>
                        <img className='product-image__large' alt="" src={testProduct.image}></img>
                        <div className='small-images' onClick={handleSmallImageClick}>
                            <img className='product-image selected' alt="" src={testProduct.image}></img>
                            <img className='product-image' alt="" src={testProduct.image_hover}></img>
                            <img className='product-image' alt="" src={testProduct.image_detail1}></img>
                            <img className='product-image' alt="" src={testProduct.image_detail2}></img>
                        </div>
                    </div>

                    {/* Information */}
                    <div className='product-information__container'>
                        <h3 className='product-name'> {testProduct.productName}</h3>
                        <hr className="submenu-divider" />
                        <p className='product-price'>{testProduct.price}</p>
                        <div className='product-availability'>
                            <p className='product-availability__subtitle'>Доступность:</p>
                            {testProduct.quantity > 0 ? <p className='product-availability'>Да</p>
                                : <p className='product-availability'>Нет</p>}
                        </div>
                        <div className='product-availability'>
                            <p className='product-category__subtitle'>Категория:</p>
                            <p className='product-category'>{testProduct.cateNameRussian}</p>
                        </div>
                        <p className='product-delivery'>Бесплатная доставка</p>
                        <hr className="submenu-divider" />

                        {/* Select colors */}
                        <div className='select-color'>
                            <p className='select-color__subtitle'>Цвет:</p>
                            <div className="color-dots-container">
                                {modelOptions.map((item) => (
                                    <div
                                        key={item.color}
                                        className="color-link"
                                        style={{ cursor: item.id != null ? 'pointer' : 'default' }}
                                    >
                                        {item.id != null ? <Link to={`${url}/${item.id}`} className="color-dot-container">
                                            <div
                                                className={`color-dot ${parseInt(currentId) === item.id ? 'selected-dot' : ''}`}
                                                style={{ backgroundColor: item.color }}
                                            ></div>
                                        </Link> :
                                            <div
                                                className='color-dot out-of-stock'
                                                style={{ backgroundColor: item.color }}
                                            ></div>}

                                    </div>
                                ))}



                            </div>
                        </div>

                        {/* Select size */}
                        <div className='select-size'>
                            <p className='select-color__subtitle'>Размер:</p>

                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default ProductPage
