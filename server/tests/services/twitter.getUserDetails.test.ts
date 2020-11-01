import twitter from "../../src/services/twitter";

jest.mock('twitter');

describe("Tests for the getUserDetails function in the twitter service", () => {
  test("Should return an objects with specific values", async () => {
    //Arrange
    expect.assertions(3);
    const correctResult = {
        "name": "World Food Programme",
        "id": 27830610,
        "screen_name": "WFP"
    }
      
    //Act
    const result = await twitter.getUserDetails(27830610);

    //Assert
    expect(result.name).toEqual(correctResult.name);
    expect(result.screen_name).toEqual(correctResult.screen_name);
    expect(result.id).toEqual(correctResult.id);
  });
});
