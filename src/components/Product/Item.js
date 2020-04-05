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


    const addToCart = ()=>{
        //build object
        const item ={
            key: cart.length, //keeps the items unique for now
            id: props.id,
            title: props.title,
            price: props.price,
            quantity: props.quantity,
            image: props.image
         };

        //add item object to current cart
        setCart(currentCart => [...currentCart, item]);
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


        <Button variant="outlined" color="primary" onClick={addToCart}>
           Add to Cart
         </Button>
         </div>
      </Card >
     // </Link>
    );

}

export default Item;
