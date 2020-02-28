const request = require('supertest')

const server = require('../api/server')

describe('register / login router', function() {
    it('should run the tests', function(){
        expect(true).toBe(true)
    })
    describe('POST /login', function() {
        it('should return 200 ok', function(){
            return request(server).post('/api/auth/login') 
                .send({ username: 'tyler', password: 'tyler' }) 
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
    describe('POST /login json', function() {
        it('should return 200 ok', function(){
            return request(server).post('/api/auth/login')
                .send({ username: 'tyler', password: 'tyler' })
                .then(res => {
                    expect(res.type).toMatch(/json/)
                })
        })
    })
    describe('POST /register json', function() {
        it('should return 200 ok', function(){
            return request(server).post('/api/auth/register')
                .send({ username: 'test', password: 'test' })
                .then(res => {
                    expect(res.type).toMatch(/json/)
                })
        })
    })
    describe('POST /register', function() {
        it('should return 500 lol', function(){
            return request(server).post('/api/auth/register')
                .send({ username: 'tyler', password: 'tyler' }) 
                .then(res => {
                    expect(res.status).toBe(500)
                })
        })
    })
})