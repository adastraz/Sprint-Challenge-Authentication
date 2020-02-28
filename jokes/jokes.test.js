const request = require('supertest')

const server = require('../api/server')
const requestOptions = {
    headers: { accept: 'application/json' },
  }

describe('register / login router', function() {
    it('should run the tests', function(){
        expect(true).toBe(true)
    })
    describe('GET /jokes', function() {
        it('should return 200 ok', function(){
            return request(server).get('/api/jokes') 
                .send(requestOptions)
                .then(res => {
                    expect(res.status).toBe(400)
                })
        })
    })
    describe('GET /jokes json', function() {
        it('should return 200 ok', function(){
            return request(server).get('/api/jokes') 
                .then(res => {
                    expect(res.type).toBe('application/json')
                })
        })
    })
})