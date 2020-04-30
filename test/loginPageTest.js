const {expect} = require('chai')
var jsdom = require("mocha-jsdom");
import ReactDOM from 'react-dom';
import React from 'react';
import { act } from "react-dom/test-utils";
const LoginPage = require('../src/components/pages/login/LoginPage').default
var jsdom = require("mocha-jsdom");
import { shallow, mount } from 'enzyme'

// data to the login in with
const userCredentials = {
  username: 'caitlin.landrus',
  password: 'testing'
}

const invalidCredentials = {
  username: 'caitlin.landrus',
  password: 'invalid'
}



global.document = jsdom({
  url: "http://localhost:5000/"
});


let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

/* ------------  UI TESTS  ---------------*/
describe("Login Page UI", () => {
  it("Returning Customer Header", (done) => {

    act(() => {
      ReactDOM.render(<LoginPage />, rootContainer);
    });
    const h2 = rootContainer.querySelector("h2");
    expect(h2.textContent).to.equal("Returning Customer");
    done();
  });

  it("Blank Username Input Field", (done) => {
    act(() => {
      ReactDOM.render(<LoginPage />, rootContainer);
    });
    const input = rootContainer.querySelector("input[name='username']");
    expect(input.textContent).to.equal('');
    done();
  });

  it("Blank Password Input Field", (done) => {
    act(() => {
      ReactDOM.render(<LoginPage />, rootContainer);
    });
    const input = rootContainer.querySelector("input[name='password']");
    expect(input.textContent).to.equal('');
    done();
  });

  it("Sign In Button", (done) => {
    act(() => {
      ReactDOM.render(<LoginPage />, rootContainer);
    });
    const button = rootContainer.querySelector("button");
    expect(button.textContent).to.equal('Sign In');
    done();
  });
});
