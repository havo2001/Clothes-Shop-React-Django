import React, { useState } from 'react';
import './productPage.css';
import { Link, useLocation, useParams } from "react-router-dom";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Products } from '../../data/Products';
import { breadCrumbsDisplay } from '../../data/Categories';
import SizeSelector from '../../components/sizeSelector/SizeSelector';
import Order from '../../data/Order';
import ShowProducts from '../../components/showProducts/ShowProducts';


const testProduct = {
    id: 1,
    model_id: 1,
    productName: "Свитшот-платье",
    cateNameRussian: "Платья",
    cateName: "Dresses",
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

const availableSize = [
    {
        size: "S",
        id: 1
    },
    {
        size: "M",
        id: 2
    }
]


const ProductPage = () => {
    const location = useLocation();

    console.log(useParams())
    let currentLink = '';


    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index, array) => {
            currentLink += `/${crumb}`;
            const breadcrumbInfo = breadCrumbsDisplay.find(item => item.crumb === crumb);
            const display = breadcrumbInfo ? breadcrumbInfo.display : crumb;

            // If it's the last crumb, set it to productName
            const productName = index === array.length - 1 ? Products.find(product => product.id === parseInt(crumb)).productName : display;

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{productName}</Link>
                </div>
            );
        });

    // Image display
    const handleSmallImageClick = (event) => {
        const clickedImage = event.target;
        const largeImage = document.querySelector('.product-image__large');

        if (clickedImage.classList.contains('small-product-image')) {
            largeImage.src = clickedImage.src;

            const smallImages = document.querySelectorAll('.small-product-image');
            smallImages.forEach(image => image.classList.remove('selected'));
            clickedImage.classList.add('selected');
        }
    };

    // Get current link and id.
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const currentId = pathSegments.pop();
    const url = '/' + pathSegments.join('/');

    // Current size of the id:
    const currentSize = availableSize.find(item => item.id === parseInt(currentId));
    let defaultSize;

    if (currentSize) {
        defaultSize = currentSize.size;
    } else {
        defaultSize = sizes[0].size;
    }

    // Quantity Button: 
    const [productQuantity, setProductQuantity] = useState(0);

    const increase = () => {
        const newQuantity = productQuantity + 1;
        setProductQuantity(newQuantity);
    }

    const decrease = () => {
        const newQuantity = productQuantity - 1;
        setProductQuantity(newQuantity);
    }


    // Add to cart button:
    const [quantity, setQuantity] = useState(Order.numOrders);

    const addToCart = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        Order.numOrders = newQuantity;
    }

    return (
        <>
            <section className='product-page'>
                <Header />
                <div className='product__breadcrumbs'>
                    {crumbs}
                </div>

                <div className='product-page__container container'>
                    {/* Images displace */}
                    <div className='product-image__container'>
                        <img className='product-image__large' alt="" src={testProduct.image}></img>
                        <div className='small-images' onClick={handleSmallImageClick}>
                            <img className='small-product-image selected' alt="" src={testProduct.image}></img>
                            <img className='small-product-image' alt="" src={testProduct.image_hover}></img>
                            <img className='small-product-image' alt="" src={testProduct.image_detail1}></img>
                            <img className='small-product-image' alt="" src={testProduct.image_detail2}></img>
                        </div>
                    </div>

                    {/* Information */}
                    <div className='product-information__container'>
                        <h3 className='page-product-name'> {testProduct.productName}</h3>
                        <div className="submenu-divider-name"></div>
                        <p className='page-product-price'>{testProduct.price}</p>

                        <div className='product-information__text'>
                            <div className='product-availability grid'>
                                <p className='product-availability__subtitle'>Доступность:</p>
                                {testProduct.quantity > 0 ? <p className='product-availability'>Да</p>
                                    : <p className='product-availability'>Нет</p>}
                            </div>
                            <div className='product-availability grid'>
                                <p className='product-category__subtitle'>Категория:</p>
                                <p className='product-category'>{testProduct.cateNameRussian}</p>
                            </div>
                            <p className='product-delivery'>Бесплатная доставка</p>
                        </div>

                        <div className="submenu-divider2"></div>

                        {/* Select colors */}
                        <div className='select-color grid'>
                            <p className='select-color__subtitle'>Цвет:</p>
                            <div className="color-dots-container">
                                {modelOptions.map((item) => (
                                    <div
                                        key={item.color}
                                        className="color-link"
                                        style={{ cursor: item.id != null ? 'pointer' : 'default' }}
                                    >

                                        {item.id != null ? (
                                            <Link to={`${url}/${item.id}`} className="color-dot-container">
                                                <svg className="color-dot" viewBox="0 0 24 24" width="24" height="24">
                                                    <circle className={`${parseInt(currentId) === item.id ? 'selected-dot' : ''}`}
                                                        cx="12" cy="12" r="12" fill='#FFFFFF' />
                                                    <circle cx="12" cy="12" r="10" fill="#FFFFFF" />
                                                    <circle cx="12" cy="12" r="8" fill={item.color} />
                                                </svg>
                                            </Link>
                                        ) : (
                                            <svg className="color-dot out-of-stock" viewBox="0 0 24 24" width="24" height="24">
                                                <circle cx="12" cy="12" r="10" fill="#999999" />
                                                <circle cx="12" cy="12" r="7" fill={item.color} />
                                            </svg>
                                        )}

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Select size */}
                        <div className='select-size grid'>
                            <p className='select-color__subtitle'>Размер:</p>
                            <SizeSelector className="select-size__form" sizeList={sizes}
                                availableSize={availableSize}
                                parentLink={url}
                                defaultSize={defaultSize}
                            />
                        </div>

                        <div className="submenu-divider"></div>

                        {/* Select quantity and add to cart */}
                        <div className='quantity-and-cart'>
                            <div className='quantity-btn'>
                                {productQuantity > 0 ?
                                    <button className='decrease-btn' onClick={decrease}>-</button> :
                                    <button className='decrease-btn'>-</button>}

                                <p className='quantity-display'>{productQuantity}</p>

                                {productQuantity < testProduct.quantity ?
                                    <button className='increase-btn' onClick={increase}>+</button> :
                                    <button className='increase-btn'>+</button>}
                            </div>
                            <button className='add-to-cart' onClick={addToCart}>
                                <i className='uil uil-shopping-cart-alt page-cart__icon'></i>
                                <p className='cart__text'>В Корзину</p>
                            </button>
                        </div>
                    </div>

                </div>
                {/* Related Products */}
                <div className='related-products container'>
                    <h2 className='recommend__title'>РЕКОМЕНДУЕМ ТАКЖЕ</h2>
                    <ShowProducts catName={testProduct.cateName}></ShowProducts>
                </div>

                <Footer />
            </section>
        </>
    )
}

export default ProductPage
