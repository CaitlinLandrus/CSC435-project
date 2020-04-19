import React, {useContext, useState} from 'react';
import {CartContext} from '../cart/CartContext';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(0, 0),
    maxWidth: '80%',
    margin: 0
  },
  total: {
    fontWeight: 700,
    textAlign:'left',
  },
  title: {
    marginTop: theme.spacing(2),
    fontWeight: 600,
  },
}));


const ReviewForm =(props) =>{
      const classes = useStyles();

      const [cart] = useContext(CartContext);
      const total = cart.reduce((initialPrice, current) => initialPrice + (current.price * current.purchQuantity), 0)
      const totalPrice = Number(total).toFixed(2); //used to convert to only 2 decimal places
/*
      const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
    const payments = [
      { name: 'Card type', detail: 'Visa' },
      { name: 'Card holder', detail: 'Mr John Smith' },
      { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
      { name: 'Expiry date', detail: '04/2024' },
    ];
*/

    const [addresses] = useState( ['1 Material-UI Drive', 'Reactville', 'Minnesota', '99999']);//);

    const [payments] = useState([
        { name: 'Card Type', detail: 'Visa' },
        { name: 'Card Holder', detail: 'John Doe' },
        { name: 'Card Number', detail: 'xxxx-xxxx-xxxx-1234' },
        { name: 'Expiry Date', detail: '04/2024' },
    ]);

    const [shipUser] = useState({
            name: "John Doe"
    })
    
    return (
        <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Shipping Information
            </Typography>
            <Typography gutterBottom>
              {shipUser.name}
              </Typography>
            <Typography gutterBottom>{addresses.join(', ')}</Typography>
          </Grid>

          <Grid  containerxs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Order Summary
              </Typography>

              <List disablePadding>
                    {cart.map((item) => (
                        <ListItem className={classes.listItem} key={item.key}>
                        <ListItemText primary={item.purchQuantity + " " + item.title} />
                        <Typography variant="body2">{item.price}</Typography>
                        </ListItem>
                    ))}

                    <ListItem className={classes.listItem}>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" className={classes.total}>
                            ${totalPrice}
                        </Typography>
                    </ListItem>
                </List>
            </Grid>
      </Grid>

      <Grid item container direction="column" xs={12} sm ={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment Details
          </Typography>

          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

      </Grid>
    </React.Fragment>
    );
}

export default ReviewForm;
