import React from 'react'
import './CheckoutProduct.css';

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image}/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div class='checkoutProduct__rating'>
                    {Array(rating).fill().map((_,i) => (
                        <p>
                            <img
                                width="18"
                                height="18"
                                key={id}
                                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/star_2b50.png"
                            />
                        </p>
                    ))}
                </div>
                <button>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
