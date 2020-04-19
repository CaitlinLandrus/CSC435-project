import React,{useContext, useEffect} from 'react';
import {CartContext} from './CartContext';
import  Header  from '../../PageElements/Header'
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './cart.css'
import { Link } from "react-router-dom";
import CartSummary from './CartSummary'
import OrderSummary from './OrderSummary'

/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 4, Assignment 4
    Created: 3/30/2020
    Revised: 4/13/2020

*/



const Cart = (props) =>{
    const [cart, setCart] = useContext(CartContext);
    const total = cart.reduce((initialPrice, current) => initialPrice + (current.price * current.purchQuantity), 0)
    const totalPrice = Number(total).toFixed(2); //used to convert to only 2 decimal places

    useEffect(() => {
      // Update the document title using the browser API
      document.title = `My Cart | CSP Store`;
    });

    /*
    * Shows the contents of the cart if there are items in the cart.
    * Otherwise it shows a message that the cart is empty and gives a "Shop Stor Now"
    * button that links to the online store
    */
    function pageDisplay(){
        if(cart.length <= 0){
            return(
                showEmptyCart()
            )
        }
        else{
            return(
                <React.Fragment>
                    <Box className = "right"  id="orderSummary" >
                        {showSummary()}
                        {showButton()}
                    </Box>
                    <Box className = "left" id="itemSummary">
                        <CartSummary  />
                    </Box>
                </React.Fragment>
            )
        }
    }

    /**
    * Displays that there are no items in the cart and direct the user to the Shop page
    */
    function showEmptyCart(){
        if(cart.length === 0){
            return(
                <Box display="flex" justifyContent="flex-end" className = "card-empty-cart" >
                  <div className = "item">
                  <CardContent className = "card-empty-content">
                      <Typography gutterBottom variant="h5" component="h4">
                        Your Cart is Empty!
                      </Typography>
                  </CardContent>

                  <div className = "card-empty-content">
                      <img
                       className="item-img"
                        src={"./images/basket.jpg"}
                        alt={"empty basket"}
                       />
                     </div>

                <Link to="/" className = "link">
                  <Button variant="outlined" color="secondary" className = "card-empty-content">
                    Shop Store Now
                  </Button>
                   </Link>
                   </div>
                </Box >
              );
          }
    }

    /*
    * Shows the Checkout Now button or Login & Checkout Button
    */
    function showButton(){
        if(props.profile.userID ===""){
            return(
                <div className = "checkout-button">
                    <Link to="/login" className = "link">
                        <br/>
                        <Button variant="contained" color="primary"  >
                            Login & Checkout
                        </Button>
                    </Link>
                </div>
            )
        }
        else if(cart.length > 0){
            return(
            <div className = "checkout-button">
                <Link to="/checkout" className = "link">
                    <br/>
                    <Button variant="contained" color="primary" >
                      Checkout Now
                    </Button>
                </Link>
            </div>
        )
        }
    }

    /**
    * Displays the carts item totals and the cart total
    */
    function showSummary(){
        return(
            <React.Fragment>
                <CardContent className = "card-empty-content">
                    <Typography gutterBottom variant="h5" component="h4">
                     Order Summary
                    </Typography>
                </CardContent>

                <CardContent className = "card-empty-content">
                    <Typography gutterBottom variant="body1" component="p">
                        {showItemTotals()}
                    </Typography>
                </CardContent>
                <CardContent className = "card-empty-content">
                    <hr/>
                    <Typography gutterBottom variant="body1" component="p">

                        <span className="left">
                           TOTAL
                        </span>
                        <span className = "right">
                           ${totalPrice}
                        </span>
                    </Typography>
                </CardContent>
            </React.Fragment>
        )
    }

    /*
    * Maps the items out into the order summary box
    */
    function showItemTotals(){
        return cart.map((item)=>{
            return(
                <OrderSummary
                    key = {item.id}
                    purchQuantity = {item.purchQuantity}
                    title = {item.title}
                    price = {item.price}
                />
            )}
        )
    }


    return(
        <div className="cart">
        <Header header={"Manage Cart"}/>
            {pageDisplay()}
        </div>
    )
}

export default Cart;
