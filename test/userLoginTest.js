var chai = require('chai');
var expect = chai.expect;
import chaiRedux from 'chai-redux';

var jsdom = require("mocha-jsdom");
import { act } from "react-dom/test-utils";
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
const LoginPage = require('../src/components/pages/login/LoginPage').default
const NavBar = require('../src/components/NavBar/NavBar').default
import reducer from "../src/redux/reducers"
import profileReducter from "../src/redux/reducers"
import  userData from '../src/components/data/userData.json';
import * as Actions from "../src/redux/actions/user_action";

//create a mock redux store
chai.use(chaiRedux);
const store = chai.createReduxStore({ reducer });

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
  act(() => {
    ReactDOM.render(<LoginPage />, rootContainer);
  });
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

/* ------------  UI TESTS  ---------------*/
describe("Simulate User Login", () => {
  it("Initial store state has no logged in user", (done) => {
      expect(store).to.have
      .state({"profile":{"userID":"","type":"","firstName":"","lastName":"","email":"","username":"","password":""}});
      done();
  });

  it("Alert shows when username is not populated on submit", (done) => {
      //update the password field for valid test
      const password = rootContainer.querySelector("input[name='password']")
      password.value = 'testing'
      ReactTestUtils.Simulate.change(password)

      //simulate clicking the submit button
      rootContainer.querySelector("button").click();
      alert = rootContainer.querySelector("#alert")
      expect(alert.textContent).to.equal("Username is required");
      done();
  });

  it("Alert shows when password is not populated on submit", (done) => {
      //update the username field
      const username = rootContainer.querySelector("input[name='username']")
      username.value = 'caitlin.landrus'
      ReactTestUtils.Simulate.change(username)

      //click submit
      rootContainer.querySelector("button").click();

      alert = rootContainer.querySelector("#alert")
      expect(alert.textContent).to.equal("Password is required");
      done();
  });

  it("Alert shows when password is invalid on submit", (done) => {
      //Update the username field
      const username = rootContainer.querySelector("input[name='username']")
      username.value = 'caitlin.landrus'
      ReactTestUtils.Simulate.change(username)

      //Invalid Password
      const password = rootContainer.querySelector("input[name='password']")
      password.value = 'invalid'
      ReactTestUtils.Simulate.change(password)

      //click submit
      rootContainer.querySelector("button").click();

      alert = rootContainer.querySelector("#alert")
      expect(alert.textContent).to.equal("Invalid username or password");
      done();
  });


  it("Alert shows when username is invalid on submit", (done) => {
      //Update the username field
      const username = rootContainer.querySelector("input[name='username']")
      username.value = 'invalid'
      ReactTestUtils.Simulate.change(username)

      //Invalid Password
      const password = rootContainer.querySelector("input[name='password']")
      password.value = 'testing'
      ReactTestUtils.Simulate.change(password)

      //click submit
      rootContainer.querySelector("button").click();

      alert = rootContainer.querySelector("#alert")
      expect(alert.textContent).to.equal("Invalid username or password");
      done();
  });



    it("User is added to store on submit with valid data", (done) => {
        //Update the username field
        const username = rootContainer.querySelector("input[name='username']")
        username.value = 'caitlin.landrus'
        ReactTestUtils.Simulate.change(username)

        //Invalid Password
        const password = rootContainer.querySelector("input[name='password']")
        password.value = 'testing'
        ReactTestUtils.Simulate.change(password)

        //click submit
        rootContainer.querySelector("button").click();

        //peform the Add to Store Action with user data
        store.dispatch(Actions.loginAction(
                0,
                "Student",
                "Caitlin",
                "Landrus",
                 "landrusc@csp.edu",
                "caitlin.landrus",
                 "testing"
            ));

        //Store has the user data that we added
        expect(store).to.have
        .state({"profile":{"userID":0,"type":"Student","firstName":"Caitlin","lastName":"Landrus","email":"landrusc@csp.edu","username":"caitlin.landrus","password":"testing"}});
        done();
    });

});
