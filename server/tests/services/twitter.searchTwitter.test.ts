import twitter from "../../src/services/twitter";

jest.mock('twitter');

describe("Tests for the searchTwitter function in the twitter service", () => {
  test("Should return an array of objects with specific values", async () => {
    //Arrange
    expect.assertions(1);
    const correctResult = {
        "screen_name": "WFP",
        "id": 27830610,
        "name": "World Food Programme"
    }
      
    //Act
    const result = await twitter.searchTwitter("food");

    //Assert
    expect(result).toContainEqual(
      expect.objectContaining(correctResult)
    )
  });
});
