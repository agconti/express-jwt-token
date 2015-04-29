var express = require('express')
  , request = require('supertest')
  , should = require('chai').should()
  , jwtAuthProtected = require('../').jwtAuthProtected
  , fixtures = require('./fixtures')
  , app 

describe('End To End', function(){
  beforeEach(function(done){
    app = express()
    app.use('/', jwtAuthProtected)
    done()
  })
  it('A request with a valid token should succees', function(done){
    request(app)
      .get('/')
      .set('authorization', fixtures.authorization)
      // .expect(200)
      .end(function(err, res){
        if (err){ 
          console.log(err)
          throw err 
        }
        // console.log(res)
        should.exist(res.user)
      })
  })
})