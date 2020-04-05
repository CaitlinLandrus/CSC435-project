import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'visible',
    padding: `0 ${theme.spacing(3)}px`,
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(2),
  },
});




const CartGrid = (props) => {
  const { classes } = props;


  return (
      <div className={classes.root}>
      <Paper className={classes.paper} id="grid-container">
        <Grid container wrap="nowrap" spacing={10} alignItems="center" >
        <Grid item xs zeroMinWidth className = "item-container">
            <Typography noWrap>
        <img src={props.image} alt = {props.image} height="100px" /></Typography>
        </Grid>
            <Grid item xs zeroMinWidth className = "item-container">
                <Typography >{props.title}</Typography>
            </Grid>

            <Grid item xs zeroMinWidth className = "item-container">
                <Typography noWrap>${props.price}</Typography>
            </Grid >


            <Grid item xs zeroMinWidth>
                <Typography noWrap>
                    <IconButton aria-label="delete" className ="delete-button">
                        <DeleteIcon />
                    </IconButton>
                </Typography>
            </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

CartGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartGrid);
