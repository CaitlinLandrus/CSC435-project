import React, { Component, useEffect, useState } from 'react';
import AccountForm from './AccountForm'
import PasswordForm from './PasswordForm'
import Header from '../../PageElements/Header'
import axios from 'axios';
/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 4, Assignment 4
    Created: 3/30/2020
    Revised: 4/11/2020 - Updated to user Redux action, moved AccountForm and PasswordForm to own files

*/

const AccountPage = (props) =>{
        const [user, setUser] = useState({});
        const [userIsLoaded,setUserIsLoaded] = useState(false);
        const [dbUpdated,setDbUpdated] = useState(false);

        useEffect(() => {
            document.title = 'Update Account | CSP Store';

            //get the specified user from the database
            async function fetchUser(){
                  await axios.get('/api/getUser/'+props.profile.username+'/'+props.profile.password)
                         .then((response) => {
                           const { users } = response.data;
                           setUser(users[0])
                           console.log("Users on Mount", users[0])
                           console.log("User", user)
                         })
                         .catch(() => alert('Error fetching new users'));
              }

              fetchUser();
        }, [])

        //makes sure there is user data stored in our state
        useEffect(()=>{
            if(user !== undefined && Object.getOwnPropertyNames(user).length >= 1){
                      setUserIsLoaded(true)
            }
        })


        useEffect(()=>{
            console.log('dbUpdated',dbUpdated)
            //get the database data again
            if(dbUpdated === true){
                async function fetchUser(){
                      await axios.get('/api/getUser/'+props.profile.username+'/'+props.profile.password)
                             .then((response) => {
                               const { users } = response.data;
                               setUser(users[0])

                               //reset the dbUpdated flag
                               setDbUpdated(false)
                               console.log("Updated User", user)
                             })
                             .catch(() => alert('Error fetching new users'));
                  }

                  fetchUser();
            }
        })








    function updatePassword(e){
        //passess new password to the redux updateAccountAction
        console.log(props.profile)
        props.updateAccountAction(
            //only the password will change in the password form
            props.profile.userID,
            props.profile.type,
            props.profile.firstName,
            props.profile.lastName,
            props.profile.email,
            props.profile.username,
            e.newPassword
        )
        console.log("prop first",user.firstName)
        updateUser(user.firstName, user.lastName, user.email, user.username, e.newPassword)

        setDbUpdated(true)

    }

    function updateUserAccount(e){
        //passess new username to the redux updateAccountAction
        //console.log("E Data", e)
        props.updateAccountAction(
            props.profile.userID,
            props.profile.type,
            e.firstName,
            e.lastName,
            e.email,
            e.username,
            props.profile.password
        )

        updateUser(e.firstName, e.lastName, e.email, e.username, user.password)


         setDbUpdated(true)
    }

    async function updateUser(firstName, lastName, email, username, password){
        await axios.put('/api/updateUser/'+ props.profile.userID,{
                firstName: firstName,
                lastName: lastName,
                email: email,
                username: username,
                password: password
            })
               .then((response) => {
                 console.log(response)
               })
               .catch((error) => console.log('Error Updating Users', error));
    }

    function displayForms(userIsLoaded){
        //only display the form once the user is loaded from the database
        if(userIsLoaded === true){
            return (
                <div>
                    <AccountForm loggedInUser ={user} updateUserAccount={data => updateUserAccount(data)} />
                    <PasswordForm loggedInUser ={user} updatePassword={data => updatePassword(data)} />
                </div>
            )
        }
    }

    return (
      <div className="AccountPage">
        <Header header={"Update Account"}/>
        {displayForms(userIsLoaded)}

      </div>
    );

}

export default AccountPage;
