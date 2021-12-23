import React from 'react'
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    console.log("this is the basket >>", basket);

    const addToBasket = () => {
        
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                title: title,
                image: image,
                price: price,
                rating: rating, 
            },
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p> 
                <p className="product__price"> 
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
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
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button> 
        </div>
    )
}

export default Product
