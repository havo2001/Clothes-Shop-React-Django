import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import './cart.css';

function ProductImage({ imageSrc, productName }) {
    return (
        <div className="product-image">
            <img src={imageSrc} alt={productName} className="image" />
        </div>
    );
}

function ProductInfo({ productName }) {
    return <div className="product-name">{productName}</div>;
}

function ProductPrice({ quantity, unitPrice }) {
    const numericUnitPrice = parseFloat(unitPrice.replace('$', ''));

    const originalPrice = quantity * numericUnitPrice;

    return (
        <div className="original-price">{'$' + originalPrice}</div>
    );
}

function ProductItem({ id, imageSrc, productName, unitPrice, quantity, onQuantityChange, onRemove}) {
    const handleRemove = () => {
        onRemove(id);
    };

    const handleQuantityChange = (newQuantity) => {
        onQuantityChange(id, newQuantity);
    };

    return (
        <div className="product-item">
            <div className="product-details">
                <button className="remove-button" onClick={handleRemove}>
                    <i className="remove-button-title">x</i>
                </button>
                <ProductImage imageSrc={imageSrc} productName={productName} />
                <ProductInfo productName={productName} />
            </div>
            <div className="product-price">
                <ProductPrice quantity={quantity} unitPrice={unitPrice} />
                <QuantityButton
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                />
                <div className="unit-price">{unitPrice}</div>
            </div>
        </div>
    );
}

function CheckoutButton() {
    return (
        <button className="checkout-button">
            <span className="checkout-text">Checkout</span>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0408b7fbfce7a0d33ac6c40b0f2ba42f322aa075a23f31101e4ea0ccbc14229?apiKey=a823bb3ee71445d9895c0391c36ad3f8&"
                alt=""
                className="checkout-background"
            />
        </button>
    );
}

const products = [
    {
        id: 1,
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/61472d8ccde9ec49c2ced7a21659b9bbdaa1deecbdbe3c108a9c72673f17168e?apiKey=a823bb3ee71445d9895c0391c36ad3f8&",
        productName: "Nike Airmax 270 react",
        unitPrice: "$499",
        quantity: 1,
    },
    {
        id: 2,
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c566ee1d6bcfbbdc9d6e0410ec5b1647488d0b79c25ef5e867e291fa108d1471?apiKey=a823bb3ee71445d9895c0391c36ad3f8&",
        productName: "Nike Airmax 270 react",
        unitPrice: "$499",
        quantity: 1,
    },
];

function QuantityButton({ quantity, onQuantityChange }) {
    const handleIncrease = () => {
        onQuantityChange(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div className="quantity-button">
            <button className="quantity-button__btn" onClick={handleDecrease}><strong>-</strong></button>
            <span className="quantity-button__value">{quantity}</span>
            <button className="quantity-button__btn" onClick={handleIncrease}><strong>+</strong></button>
            <style jsx>{`
          :root {
            --button-bg-color: #F6F7F8; 
          }
          .quantity-button {
            display: flex;
            align-items: center;
          }
          .quantity-button__btn {
            border: none;
            padding: 7px;       
            color: #BF627B;
            background-color: var(--button-bg-color); 
          }
          .quantity-button__value {
            padding: 5px;
            background-color: var(--button-bg-color); 
          }
          .quantity-button__btn strong {
            font-weight: 1000;
          }
        `}</style>
        </div>
    );
}

function TotalPrice({ label, subtotal, onSubtotalUpdate }) {
    const totalPrice = subtotal + 20;

    return (
        <div className="price-summary">
            <div className="price-label">{label}</div>
            <div className="price-value">${totalPrice}</div>
        </div>
    );
}

function MyComponent() {
    const [products, setProducts] = useState([
        {
            id: 1,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/61472d8ccde9ec49c2ced7a21659b9bbdaa1deecbdbe3c108a9c72673f17168e?apiKey=a823bb3ee71445d9895c0391c36ad3f8&",
            productName: "Nike Airmax 270 react",
            unitPrice: "$499",
            quantity: 1,
        },
        {
            id: 2,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c566ee1d6bcfbbdc9d6e0410ec5b1647488d0b79c25ef5e867e291fa108d1471?apiKey=a823bb3ee71445d9895c0391c36ad3f8&",
            productName: "Nike Airmax 270 react",
            unitPrice: "$499",
            quantity: 1,
        },
    ]);

    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const newSubtotal = products.reduce((total, product) => {
            const numericUnitPrice = parseFloat(product.unitPrice.replace('$', ''));
            return total + numericUnitPrice * product.quantity;
        }, 0);
        setSubtotal(newSubtotal);
    }, [products]);

    const handleQuantityChange = (productId, newQuantity) => {
        setProducts(products.map(product =>
            product.id === productId ? { ...product, quantity: newQuantity } : product
        ));
        const newSubtotal = products.reduce((total, product) => {
            const numericUnitPrice = parseFloat(product.unitPrice.replace('$', ''));
            return total + numericUnitPrice * product.quantity;
        }, 0);
        setSubtotal(newSubtotal);
    };

    const handleSubtotalUpdate = (newSubtotal) => {
        setSubtotal(newSubtotal);
    };

    const handleRemove = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <>
            <header className="product-header">
                <div className="product-title">PRODUCT</div>
                <div className="price-details">
                    <div className="price-label">PRICE</div>
                    <div className="quantity-label">QTY</div>
                    <div className="unit-price-label">UNIT PRICE</div>
                </div>
            </header>
            <div className="separator" />

            {products.map((product) => (
                <React.Fragment key={product.id}>
                    <ProductItem {...product} onQuantityChange={handleQuantityChange} onRemove={handleRemove}/>
                    <div className="separator" />
                </React.Fragment>
            ))}
            <div className="price-summary">
                <div className="price-labels">
                    <div className="subtotal-label">Subtotal</div>
                    <div className="shipping-label">Shipping fee</div>
                </div>
                <div className="price-values">
                    <div className="subtotal-value">${subtotal}</div>
                    <div className="shipping-value">$20</div>
                </div>
            </div>
            <div className="total-separator" />
            <TotalPrice
                label="TOTAL"
                subtotal={subtotal}
                onSubtotalUpdate={handleSubtotalUpdate}
            />
            <div className="checkout-button-container">
                <CheckoutButton />
            </div>
            <style jsx>{`
            .product-image {
                width: 20%; 
                height: auto; 
                }
            `}
            </style>
        </>
    );
}
const Cart = () => {
    return (
        <>
            <section className='cart'>
                <Header />
                <BreadCrumbs />
                <div className='cart__container container'>
                    <MyComponent />
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Cart