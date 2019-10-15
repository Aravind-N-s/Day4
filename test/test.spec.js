const {User} = require('../api/models/userModel') 
const chai = require('chai')
const chaiHttp = require("chai-http")
const request = require("supertest")
const server = require('../index')
describe("Creating the  User", () => {
  it("It should throw the error to  create the user", done => {
    let man = {
      firstName: "john",
      lastName: "snow"
    };
    request(server)
      .post("/profile/add")
      .send(man)
      .expect('400', done());
  });
});

/**
 * It should throw an error while reading the user from the database.
 */
describe("Reading the user", () => {
  it("it should throw an error while reading the user", done => {
    let id = "5d657890hjsd778";
    request(server)
      .get(`/profile//${id}`)
      .expect(404, done());
  });
});

/**
 * It should throw an 400 status while  updating the user.
 */
describe("Create an error while updating the user", () => {
  it("it should throw error while updating the user", done => {
    let id = "55ii53932783782";
    request(server)
      .put(`/profile/edit/${id}`)
      .expect('400', done());
  });
});

/**
 * It should  throw an 404 error while deleting the user
 */
describe("Deleting the user", () => {
  it("it should throw error while deleting", done => {
    let id = "5d0099jjds848889";
    request(server)
      .put(`/users/${id}`)
      .expect(404, done());
  });
});