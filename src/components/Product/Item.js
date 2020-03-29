import React from 'react';
import './Product.css'


function Item(data){
    return (
      <div className="item">
        <div className = "item-image">
            <img src ={data.image} alt = {data.image}/>
        </div>
        <div className = "item-details">
            <p>
                {data.title}<br/>
                ${data.price}<br/>
             </p>
        </div>
      </div>
    );

}



export default Item;
