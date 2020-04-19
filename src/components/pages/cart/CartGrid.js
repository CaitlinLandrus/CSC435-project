import React,{useContext} from 'react';
import {CartContext} from './CartContext';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';



const CartGrid = (props) => {
    const [cart, setCart] = useContext(CartContext);


    /**
    * Removes the given item from the cart context
    */
    const removeFromCart = () => {
        const existingProduct = cart.filter(i => i.id === props.id);

          //if item is in cart already, increase the purchQuantity
          if(existingProduct.length > 0){
              const withoutExistingProduct = cart.filter(p => p.id !== props.id);
              setCart([...withoutExistingProduct])
          }
     }

     /**
     * Updates the quantity for the given item in the cart context
     */
     const updateQuantity = (e) =>{
         var newQuant = parseInt(e.target.value, 10)

         const existingProductIndex = cart.findIndex(i => i.id === props.id);
         if(existingProductIndex >= 0){
             //create a clone of our cart
             const cartProducts = cart.slice();

             //get the time we found with findIndex
             const existingProduct = cartProducts[existingProductIndex];

             //update the purchase quantity
             const updatePurchQunt ={
                 ...existingProduct,
                 purchQuantity: newQuant
             };
            cartProducts[existingProductIndex] = updatePurchQunt;

            //set our cart to the new cloned cart with the updated quantity
            setCart(cartProducts)
         }
     }

     return (
        <Grid container wrap="nowrap" spacing={1} alignItems="center" >
            <Grid item xs zeroMinWidth className = "item-container">
                <Typography >
                    <img
                        src={props.image}
                        alt = {props.image}
                        height="100px"
                    />
                </Typography>
            </Grid>

            <Grid item xs zeroMinWidth className = "item-container">
                <Typography >
                    {props.title}
                </Typography>
            </Grid>

            <Grid item xs zeroMinWidth className = "item-container">
                <div>
                <TextField
                    required
                    id="filled-number"
                    type="number"
                    variant="outlined"
                    size="small"
                    inputProps={{
                        max: props.availQuantity,
                        min: 1
                      }}


                    defaultValue = {props.purchQuantity}
                    onChange = {updateQuantity}
                />
                </div>
            </Grid>

            <Grid item xs zeroMinWidth className = "item-container">
                <Typography >
                    ${props.price}
                </Typography>
            </Grid >

            <Grid item xs zeroMinWidth>
                <Typography noWrap>
                    <IconButton
                        aria-label="delete"
                        className ="delete-button"
                        onClick={removeFromCart}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Typography>
            </Grid>
        </Grid>

    );
}

export default CartGrid;
