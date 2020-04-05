import React, { Component } from 'react';
import Item from './Item'


import './Product.css';


class Product extends Component {

    /**
    * Takes in the product json data from the parent page
    * and maps each JSON object to an Item21
    *
    * parameters: itemData - Json object
    * Return: Item object
    */
    showProducts = (itemData) =>{
        return itemData.map((itemData)=>{
            return(
                    <Item
                        key = {itemData.id}
                        id = {itemData.id}
                        title = {itemData.title}
                        price={itemData.price}
                        image={itemData.image}
                        quantity = {itemData.quantity}
                    />
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
