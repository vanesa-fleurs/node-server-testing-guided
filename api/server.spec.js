const request = require('supertest')
const server = require('./server.js')

describe('GET /', () => {
    //should return http 200
    //expect API should return JSON
    //should return an object with an
    //api property with the value of "up"
    //note: when writing test, have to make sure
    //the test can FAIL!
   it('should return 200 http', () => {
       //ONLY JEST!!!!
       return request(server).get('/').then(response => {
           expect(response.status).toBe(200)
        //    expect(/json/)
        //    expect(response.body.api).toBe('up')
       })
   })
   //
   it('should return JSON', async () => {
        const response = await request(server).get('/');
        //toMatch: uses a regular expression to check the value
        //note: toEqual and toBe and checking 'application/json' --> some endpoints give you MORE THAN 1 type
        expect(response.type).toMatch(/json/i) //i means case insensitive! 
   })

   it('should return up', async () => {
       const response = await request(server).get('/')
    //    expect(response.body.api).toBe('up') OR
       expect(response.body).toEqual({ api: 'up' })
   })
})