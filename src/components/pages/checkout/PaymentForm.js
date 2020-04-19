import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const PaymentForm =(props) =>{
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">
                        Payment Details
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3}>

                {/* Name on Card*/ }
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="cardName"
                        name="cardName"
                        label="Name on Card"
                        variant="outlined"
                        fullWidth
                     />
                </Grid>

                {/* Card Number */ }
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="cardNumber"
                        name="cardNumber"
                        label="Card Number"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                {/* Expiration Date */ }
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="MM/YY"
                        variant="outlined"
                        fullWidth
                    />
                </ Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                            <hr className= "hr"/>
                    <Typography variant="h6"  style={{ marginTop: 10 }}>
                        Billing Address
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" style={{ margin: 0 }}/>}
                        label="Same address as billing address"
                        className = "form-control"
                        style={{ margin: -10 }}
                    />
                </Grid>

                {/* Address Line 1 */ }
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                {/* Address Line 2*/ }
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                {/* City */ }
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                        id="city"
                        name="city"
                        label="City"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                {/* State Name */ }
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="state"
                        name="state"
                        label="State"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Postal code"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );

}

export default PaymentForm;
