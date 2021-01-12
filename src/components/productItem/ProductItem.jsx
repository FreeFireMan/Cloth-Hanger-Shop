import React, {useState} from 'react'
import classes from './ProductItem.module.css'
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProductCart, addProductWishlist} from "../../redux/action-creators";

const ProductItem = ({product: product}) =>{
    const dispatch = useDispatch()
    let [addedCart, setAddedCart] = useState(false)
    let [addedWishlist, setAddedWishlist] = useState(false)
    const addToCart = () => {
        dispatch(addProductCart(product))
        setAddedCart(!addedCart)
    }
    const addToWishlist = () => {
        dispatch(addProductWishlist(product))
        setAddedWishlist(!addedWishlist)
    }
    return <div>
            <div className={classes.blockItem}>
                <div className={classes.imgBlock}>
                    <img src={product.image} alt=""/>
                </div>
                <div className={classes.title}>
                    <h6>{product.title}</h6>
                </div>
                <div>
                    <div className={classes.price}>
                        <p>{product.price}$</p>
                    </div>
                    <div>
                        <button onClick={addToCart}>{addedCart ? "remove from cart" : "add to cart"}</button>
                        <button onClick={addToWishlist} >{addedWishlist ? "remove from wishlist" : "add to wishlist" }</button>
                    </div>

                </div>

            </div>

    </div>
}

export default withRouter(ProductItem)