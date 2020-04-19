import React from 'react';
import './cart.css'



const OrderSummary = (props) => {

     return (
         <React.Fragment>
         <span className="left">
            {props.purchQuantity}
            { " " + props.title}
         </span>
         <span className = "right">
            ${ Number(props.price * props.purchQuantity).toFixed(2)}
         </span>
         <br/>
         </React.Fragment>
    );
}
export default OrderSummary;
