import React, { Component } from 'react';
//import userData from '../../data/userData.json';

class Header extends Component {

  render() {
    return (
      <div className="ShopPage">
        <h2 className= "App-header">{this.props.header}</h2>
      </div>
    );
  }
}

export default Header;
