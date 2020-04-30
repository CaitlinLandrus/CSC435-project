process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User = require('../backend/models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const expect = chai.expect;


chai.use(chaiHttp);

describe('Test API Routes', () => {
    var createdUser;

      describe('GET users', () => {
          it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/api/users')
                .end((error, response) => {
                      //console.log(response.status)
                      //console.log(response.body)
                      expect(response).to.have.status(200);

                     // res.body.length.should.be.eql(0);
                  done();
                });
          });
      });

        describe('GET/:username/:password', () => {
            it('it should GET a single user by username and password', (done) => {
              chai.request(server)
                  .get('/api/getUser/caitlin.landrus/testing')
                  .end((error, response) => {
                        //console.log(response.status)
                        //console.log(response.body)
                        expect(response).to.have.status(200);
                        expect(response.body).to.be.deep.equal(
                            {
                              users: [
                                    {
                                      _id: '5ea74587f21d725374d9e024',
                                      type: 'Student',
                                      firstName: 'Caitlin',
                                      lastName: 'Landrus',
                                      email: 'landrusc@csp.edu',
                                      username: 'caitlin.landrus',
                                      password: 'testing',
                                      __v: 0
                                    }
                              ]
                        }
                    );
                    done();
                  });
            });
        });



        describe('POST new user', () => {
            it('it should create a new user', (done) => {
                //{ type : 'Student', username, password, firstName : 'CAT',lastName: 'TEST', email: 'test@test.com' }
              chai.request(server)
                  .post('/api/createUser/')
                  .send({
                        '_method': 'post',
                        'type': 'Student',
                        'firstName': 'CAT',
                        'lastName': 'TEST',
                        'email': 'test@test.com',
                        'username': 'cat.test',
                        'password': 'test',
                  })
                  .end((error, response) => {
                        //console.log(response.status)
                        //console.log(response.body)
                        expect(response).to.have.status(201);
                        createdUser = response.body.id; //used to delete the user in the next test
                        //expect(response.body).to.be.deep.equal(   );
                    done();
                  });
            });
        });


        describe('DELETE  user', () => {

            it('it should delete a user', (done) => {
                //console.log(createdUser)
              chai.request(server)
                  .delete('/api/delete/' + createdUser)
                  .end((error, response) => {
                        //console.log(response.status)
                        //console.log(response.body)
                        expect(response).to.have.status(200);
                        //expect(response.body).to.be.deep.equal(   );
                    done();
                  });
            });
        });
});
