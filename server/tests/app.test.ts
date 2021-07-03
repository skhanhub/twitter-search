import server from '../src/app';
import request from "supertest";
import { StatusCodes } from "http-status-codes";

jest.mock('twitter');

describe('Test / route', () => {
  afterEach(() => {
    server.close();
  });

  // Need to build the client for this route to work. Will crate a stub in the future :)
  test('Should loads the home page', async() => {

    //Arrange
    expect.assertions(1);

    //Act
    const RESULT = await request(server).get('/');

    //Assert
    expect(RESULT.status).toEqual(StatusCodes.OK);
  });
})



describe('Test /api/users/show route', () => {

  afterEach(() => {
    server.close();
  });


  test('Should return a JSON object with screen_name property', async() => {

    //Arrange
    expect.assertions(2);

    //Act
    const result = await request(server).get('/api/users/show?q=we');
    const jsonData = await JSON.parse(result.text)

    //Assert
    expect(result.status).toEqual(StatusCodes.OK);
    expect(jsonData).toHaveProperty('screen_name');
  });

  test('Should return BAD_REQUEST for missing query', async() => {

    //Arrange
    expect.assertions(1);

    //Act
    const result = await request(server).get('/api/users/show');

    //Assert
    expect(result.status).toEqual(StatusCodes.BAD_REQUEST);
  });
});




describe('Test /api/users/search route', () => {

  afterEach(() => {
    server.close();
  });


  test('Should return an array containing five twetter search object', async() => {

    //Arrange
    expect.assertions(2);

    //Act
    const result = await request(server).get('/api/users/search?q=we');
    const jsonData = await JSON.parse(result.text)

    //Assert
    expect(result.status).toEqual(StatusCodes.OK);
    expect(jsonData.length).toEqual(5);
  });

  test('Should return BAD_REQUEST for missing query', async() => {

    //Arrange
    expect.assertions(1);

    //Act
    const result = await request(server).get('/api/users/search');

    //Assert
    expect(result.status).toEqual(StatusCodes.BAD_REQUEST);
  });
});
