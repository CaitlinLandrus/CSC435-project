import React, { Component } from 'react';
import AccountForm from './AccountForm'
import PasswordForm from './PasswordForm'
import Header from '../../PageElements/Header'

/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 4, Assignment 4
    Created: 3/30/2020
    Revised: 4/11/2020 - Updated to user Redux action, moved AccountForm and PasswordForm to own files

*/

class AccountPage extends Component {
    componentDidMount = () => {
       document.title = 'Update Account | CSP Store';
    }

    updatePassword = (e) =>{
        //passess new password to the redux updateAccountAction
        this.props.updateAccountAction(
            //only the password will change in the password form
            this.props.profile.userID,
            this.props.profile.type,
            this.props.profile.firstName,
            this.props.profile.lastName,
            this.props.profile.email,
            this.props.profile.username,
            e.newPassword
        )
    }

    updateUserAccount = (e) =>{
        //passess new username to the redux updateAccountAction
        this.props.updateAccountAction(
            e.userID,
            e.type,
            e.firstName,
            e.lastName,
            e.email,
            e.username,
            e.password
        )
    }

    render(){
        return (
          <div className="AccountPage">
            <Header header={"Update Account"}/>
            <AccountForm loggedInUser ={this.props.profile} updateUserAccount={data => this.updateUserAccount(data)} />
            <PasswordForm loggedInUser ={this.props.profile} updatePassword={data => this.updatePassword(data)} />
          </div>
        );
    }
}

export default AccountPage;
