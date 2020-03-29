import React, { Component } from 'react';
import Product from '../../Product/Product'
import Header from '../../PageElements/Header'
import data from '../../data/data.json';
import './ShopPage.css'


class ShopPage extends Component {
    componentDidMount = () => {
       document.title = 'Shop | CSP Store';
    }
    //json example: https://www.youtube.com/watch?v=9C85o8jIgUU
    /* JSON is being passed in at the parent level so the data is
        avaialable in the parent's state, but can be passed to the
        children to build the components
    */

    constructor(props) {
        super(props);
        this.state ={
            cart:[],
            stock:data
        }

        console.log(this.state);
    }

  render() {
    return (
      <div className="ShopPage">
        <Header header={"Browse Store"} />
        <div className = "wrapper">
            <Product className = "products" products={this.state.stock}/>
        </div>
      </div>
    );
  }
}

export default ShopPage;
