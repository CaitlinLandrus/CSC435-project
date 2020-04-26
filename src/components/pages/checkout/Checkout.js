import React, { useEffect} from 'react';
import Header  from '../../PageElements/Header'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm.js';
import ReviewForm from './ReviewForm.js';
import PaymentForm from './PaymentForm.js';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Paper from '@material-ui/core/Paper';
import StepLabel from '@material-ui/core/StepLabel';


/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 5, Assignment 5
    Created: 4/13/2020
    Revised:

*/

/*
* Reference for Stepper:
* * https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/checkout/Checkout.js
* * https://material-ui.com/components/steppers/
*/
const useStyles = makeStyles((theme) => ({
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(900 + theme.spacing(2) * 2)]: {
                width: 900,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(900 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
        },
        stepper: {
            padding: theme.spacing(3, 2, 6),
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
        },
    }));

    const steps = ['Shipping Address', 'Payment Details', 'Review Order'];

    /**
    * Displays the form for the given step
    */
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm />;
            case 1:
                return <PaymentForm />;
            case 2:
                return <ReviewForm />;
            default:
            throw new Error('Unknown step');
        }
    }



const Checkout = () =>{

    useEffect(() => {
      // Update the document title using the browser API
      document.title = `Checkout | CSP Store`;

      console.log("This is only called on initial mounting");

      return function cleanup(){
          console.log("Cleanup function called on unmount")
      }
    }, []);

    //const [shipUser, setShipUser] = useState({firstName:'', lastName:''});
    //const [shipAddress, setShipAddress] = useState({address1:'', address2:'', city:'', state:'', zip:''});
    //const [billAddress, setBillAddress] = useState({address1:'', address2:'', city:'', state:'', zip:''});
    //const [payment, setPayment] = useState({cardName:'', cardNumber:'',expiration:''});

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    /* Increments the current step*/
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    /* Decrements the current step*/
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return(
        <div className="checkout">
            <Header header={"Checkout"}/>
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper} id = "container">
                        <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    <React.Fragment>
                        {/*Displays a message about the order number when the form is complete*/}
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>

                                <Typography variant="subtitle1">
                                    Your order number is #1234567. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button} color="secondary" variant="outlined">
                                            Back
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    </div>
    )
}


export default Checkout;
