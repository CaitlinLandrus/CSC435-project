import React,{useContext} from 'react';
import {CartContext} from './CartContext';
import CartGrid from './CartGrid';
import  Header  from '../../PageElements/Header'
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './cart.css'
import { Link } from "react-router-dom";

/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 4, Assignment 4
    Created: 3/30/2020
    Revised: 

*/


const Cart = () =>{
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((initialPrice, current) => initialPrice + current.price, 0)

    /*
    * Shows the contents of the cart if there are items in the cart.
    * Otherwise it shows a message that the cart is empty and gives a "Shop Stor Now"
    * button that links to the online store
    */
    function showProducts(){
        console.log(cart);
        if(cart.length>0){
        return cart.map((item, index)=>{
            return(
                <div>
                    <CartGrid
                        key ={index}
                        id ={item.id}
                        image = {item.image}
                        title = {item.title}
                        price = {item.price}
                        quantity = {item.quantity}
                    />
                </div>
            )
        })
    }
    else{
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

           // </Link>
          );
      }
    }

    /*
    * Shows the Checkout Now button only if there are items in the cart
    */
    function showButton(){
        if(cart.length > 0){
            return(
                <div className = "checkout-button">
                    <Button variant="outlined" color="primary" >
                      Checkout Now
                    </Button>
                </div>
            )
        }
    }



    return(
        <div className="cart">
        <Header header={"Manage Cart"}/>

            {showProducts()}
            {showButton()}

        </div>
    )
}






export default Cart;
