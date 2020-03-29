import React, { Component } from 'react';
import Item from './Item'

import './Product.css';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state ={
                "id": '',
                "title":'',
                "price":'',
                "quantity":'',
                "image": '',

        }

        console.log(this.state);
    }

    showProducts = (itemData) =>{

        return itemData.map((itemData, index)=>{
            console.log(this.state);
            return(
                <div  key ={itemData.id}>
                    {Item(itemData)}
                </div>
            )

        })
    }


  render() {
    return (
      <div className="product">
        {this.showProducts(this.props.products)}
      </div>
    );
  }
}



export default Product;
