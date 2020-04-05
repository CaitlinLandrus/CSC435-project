import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const Success =(props) =>{
    const classes = useStyles();
    function display(success){
        if(success){
            return(
                <Alert iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" />}}>
                    {props.children}
                 </Alert>
            )
        }
    }
    return(
        <div className={classes.root}>
            {display(props.success)}
        </div>
    )
}
export default Success;
