import React,{useContext} from 'react';
import {CartContext} from './CartContext';
import CartGrid from './CartGrid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './cart.css'



const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'visible',
    padding: `0 ${theme.spacing(1)}px`,
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(1),
  },
});


const CartSummary = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const { classes } = props;

    /**
    * Creates a grid with the product detals
    */
    function showProducts(){
        console.log(cart);
        if(cart.length>0){
            return cart.map((item)=>{
                return(
                    <CartGrid
                        key ={item.key}
                        id ={item.id}
                        image = {item.image}
                        title = {item.title}
                        price = {item.price}
                        quantity = {item.quantity}
                        purchQuantity = {item.purchQuantity}
                        availQuantity ={item.availQuantity}
                    />
                )
            })
        }
    }

     return (
         <React.Fragment>
         <div className={classes.root}>
             <Paper className={classes.paper} id="grid-container" >
                 <Grid container wrap="nowrap" spacing={1} alignItems="center" >
                     <Grid item xs zeroMinWidth className = "item-container">
                         <Typography >

                         </Typography>
                     </Grid>

                     <Grid item xs zeroMinWidth className = "item-container">
                         <Typography >
                             <strong>PRODUCT</strong>
                         </Typography>
                     </Grid>

                     <Grid item xs zeroMinWidth className = "item-container">
                         <Typography >
                             <strong>QUANTITY</strong>
                         </Typography>
                     </Grid>

                     <Grid item xs zeroMinWidth className = "item-container">
                         <Typography >
                             <strong>PRICE</strong>
                         </Typography>
                     </Grid >

                     <Grid item xs zeroMinWidth className = "item-container">
                         <Typography >

                         </Typography>
                     </Grid>

                 </Grid>

                 <hr/>

                 {showProducts()}

            </Paper>
        </div>
         </React.Fragment>
    );
}


export default withStyles(styles)(CartSummary);
