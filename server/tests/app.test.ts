import server from '../src/app';
import request from "supertest";

jest.mock('twitter');

describe('Test /api/users/show route', () => {

  afterEach(() => {
    server.close();
  });

  test('Should return a JSON object with screen_name property', async() => {

    //Arrange
    expect.assertions(2);

    //Act
    const result = await request(server).get('/api/users/show');
    const jsonData = await JSON.parse(result.text)

    //Assert
    expect(result.status).toEqual(200);
    expect(jsonData).toHaveProperty('screen_name');
  });

});


describe('Test /api/users/search route', () => {

  afterAll(() => {
    server.close();
  });


  test('Should return an array containing five twetter search object', async() => {

    //Arrange
    expect.assertions(2);

    //Act
    const result = await request(server).get('/api/users/search');
    const jsonData = await JSON.parse(result.text)

    //Assert
    expect(result.status).toEqual(200);
    expect(jsonData.length).toEqual(5);
  });

});
