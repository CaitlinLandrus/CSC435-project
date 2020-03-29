import React, { Component } from 'react';
//import userData from '../../data/userData.json';

class AccountPage extends Component {

    componentDidMount = () => {
       document.title = 'Update Account | CSP Store';
    }
    //json example: https://www.youtube.com/watch?v=9C85o8jIgUU
    /* JSON is being passed in at the parent level so the data is
        avaialable in the parent's state, but can be passed to the
        children to build the components
    */

    constructor(props) {
        super(props);
        this.state ={

        }

    }

  render() {
    return (
      <div className="ShopPage">
        <h2 className= "App-header">Update Account</h2>
        This page is going to update contact info for user with:
        <br/>  username: {this.props.username}
        <br/>  password: {this.props.password}

      </div>
    );
  }
}

export default AccountPage;
