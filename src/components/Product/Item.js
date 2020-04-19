import React,{ useContext} from 'react';
import './Product.css'
import {CartContext} from '../pages/cart/CartContext';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


/*
* Renders a single item from and formats it
* to display to the users
*/

const useStyles = makeStyles({
  root: {
      height: 450,
      width: 300,
      margin: 20,
      testAlign: 'center',
      verticalAlign: 'top',
      flexGrow:1,
      flexBasis: 300,
      alignItems:'center',
  }

});


const Item =(props) =>{
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        
        //build object
        const item ={
            key: props.id,
            id: props.id,
            title: props.title,
            price: props.price,
            availQuantity: props.quantity,
            image: props.image,
            purchQuantity: 1
         };
        const existingProductIndex = cart.findIndex(i => i.id === item.id);

        //if item is in cart already, increase the purchQuantity
        if(existingProductIndex >= 0){
            //create a clone of our cart
            const cartProducts = cart.slice();

            //get the time we found with findIndex
            const existingProduct = cartProducts[existingProductIndex];

            //update the purchase quantity
            const updatePurchQunt ={
                ...existingProduct,
                purchQuantity: existingProduct.purchQuantity + item.purchQuantity
            };
            cartProducts[existingProductIndex] = updatePurchQunt;

            //set our cart to the new cloned cart with the updated quantity
            setCart(cartProducts)
        }
        else{
            //append item to current cart
            setCart(currentCart => [...currentCart, item]);
        }
    }

    /**
    * Diables the Add To Cart button when all available quantity is in the cart
    */
    function addToCartButton(){
        const existingProduct = cart.filter(i => i.id === props.id);

        if(existingProduct.length > 0 && existingProduct[0].purchQuantity < props.quantity){
            return(
                <Button variant="outlined" color="primary" onClick={addToCart}>
                   Add to Cart
                 </Button>
            )
        }
        else if(existingProduct.length === 0 && props.quantity > 0){
            return(
                <Button variant="outlined" color="primary" onClick={addToCart}>
                   Add to Cart
                 </Button>
            )
        }
        else{
            //there purchQuantity == availQuantity or availQuantity == 0
            return(
                <Button disabled>
                   Sold Out
                 </Button>
             )
        }

    }

    return (
    //<Link to={`/item/${props.id}`}>
      <Card  className={classes.root} id="card-container">
        <div className = "item">
           <div>
               <img
                className="item-img"
                 src={props.image}
                 alt={props.image}
                />
              </div>

            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="p">
                    {props.title}<br/>
                    ${props.price}<br/>
                </Typography>
            </CardContent>

            {addToCartButton()}
         </div>
      </Card >
     // </Link>
    );

}

export default Item;
