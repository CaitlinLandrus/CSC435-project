import React,{Component} from 'react';
import './Product.css'

/*
* Renders a single item from and formats it
* to display to the users
*/

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            quantity: this.props.quantity,
        }
    }
    render(){
        return (
          <div className="item">
            <div className = "item-image">
                <img src ={this.props.image} alt = {this.props.image}/>
            </div>
            <div className = "item-details">
                <p>
                    {this.props.title}<br/>
                    ${this.props.price}<br/>
                 </p>
            </div>
          </div>
        );
    }
}
export default Item;
