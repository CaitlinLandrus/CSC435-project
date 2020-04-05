import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

//example of children props
const Error = (props)=>{
        const classes = useStyles();

        function display(error){
            if(error){
                return(
                    <Alert severity="error">
                        {props.children}
                     </Alert>
                )
            }
        }


        return(
            <div className = {classes.root}>
                {display(props.children)}
            </div>
        )

}

export default Error;
