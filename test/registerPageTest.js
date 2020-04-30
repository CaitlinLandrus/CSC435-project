const {expect} = require('chai')
var jsdom = require("mocha-jsdom");
import ReactDOM from 'react-dom';
import React from 'react';
import { act } from "react-dom/test-utils";
const RegisterPage = require('../src/components/pages/register/RegisterPage').default
const mongoose = require('mongoose')
const db = require('../backend/DB')

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

//connect to db before tests
before(function () {
  return mongoose.connect('mongodb://localhost:27017/applicationdb', {
    useNewUrlParser: true,
    useCreateIndex: true
  });
});


//disconnect from db after tests
after(function (done) {
  return mongoose.disconnect(done);
});



/* ------------  UI TESTS  ---------------*/
describe("Register Page UI", () => {

    describe('Database Connection', function() {
        before(function(done) {
            db.on('error', console.error.bind(console, 'MongoDB connection error:'))
            console.log('connected');
            done(error);
        });
    });


    it("Returning Customer", (done) => {
        act(() => {
            ReactDOM.render(<RegisterPage />, rootContainer);
        });
        const h2 = rootContainer.querySelector("h2");
        expect(h2.textContent).to.equal("New Customer");
        done();
    });

    it("Account Type Droplist", (done) => {
        act(() => {
            ReactDOM.render(<RegisterPage />, rootContainer);
        });
        const select = rootContainer.querySelector("select");
        expect(select.value).to.equal('');
        done();
    });


    it("Blank First Name Input Field", (done) => {
        act(() => {
            ReactDOM.render(<RegisterPage />, rootContainer);
        });
        const input = rootContainer.querySelector("input[name='firstName']");
        expect(input.textContent).to.equal('');
        done();
    });

    it("Blank Last Name Input Field", (done) => {
        act(() => {
            ReactDOM.render(<RegisterPage />, rootContainer);
        });
        const input = rootContainer.querySelector("input[name='lastName']");
        expect(input.textContent).to.equal('');
        done();
    });


    it("Blank Email Input Field", (done) => {
        act(() => {
            ReactDOM.render(<RegisterPage />, rootContainer);
        });
        const input = rootContainer.querySelector("input[name='email']");
        expect(input.textContent).to.equal('');
        done();
    });

    it("Blank Username Input Field", (done) => {
        act(() => {
            ReactDOM.render(<RegisterPage />, rootContainer);
        });
        const input = rootContainer.querySelector("input[name='username']");
        expect(input.textContent).to.equal('');
        done();
    });

    it("Blank Password Input Field", (done) => {
        act(() => {
            ReactDOM.render(<RegisterPage />, rootContainer);
        });
        const input = rootContainer.querySelector("input[name='password']");
        expect(input.textContent).to.equal('');
        done();
    });


    it("Blank Confirm Password Input Field", (done) => {
        act(() => {
            ReactDOM.render(<RegisterPage />, rootContainer);
        });
        const input = rootContainer.querySelector("input[name='confirmPassword']");
        expect(input.textContent).to.equal('');
        done();
    });

    it("Create Account Button", (done) => {
        act(() => {
            ReactDOM.render(<RegisterPage />, rootContainer);
        });
        const button = rootContainer.querySelector("button");
        expect(button.textContent).to.equal('Create Account');
        done();
    });
});
