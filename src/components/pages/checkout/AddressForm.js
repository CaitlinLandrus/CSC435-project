import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const AddressForm =(props) =>{
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" className= "form-header" >
                        Shipping Address
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                {/* First Name */ }
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        variant="outlined"
                        fullWidth
                     />
                </Grid>

                {/* Last Name */ }
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        variant="outlined"
                        fullWidth
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

export default AddressForm;
