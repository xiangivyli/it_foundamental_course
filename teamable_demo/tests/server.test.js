const {app, server} = require('../server')
const request = require('supertest')


afterAll((done) => {
    server.close(done); // Ensures server is closed after all tests
});



test("test request with valid payload", async function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        position: "testing",
        location: "testing",
        skills: "testing"


    }
    const response = await request(app)
        .post('/update-profile')
        .send(testPayload)

    console.log(response.body) 
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("info")
    expect(response.body.info).toBe("user profile data updated successfully")


})

test("test request with invalid payload", async function() {
    const testPayload = {}
    const response = await request(app)
        .post('/update-profile')
        .send(testPayload)

    console.log(response.body) 
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("invalid payload, could not update profile")

})
