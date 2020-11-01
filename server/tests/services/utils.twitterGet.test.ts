import twitterGet from "../../src/services/utils";

jest.mock('twitter');

describe("Tests for the twitterGet function in the utils service", () => {
  test("Should return an objects with specific values", async () => {
    //Arrange
    expect.assertions(3);
    const correctResult = {
        "name": "World Food Programme",
        "id": 27830610,
        "screen_name": "WFP"
    }
      
    //Act
    const result: any = await twitterGet("users/show.json", {screen_name: "WFP"});

    //Assert
    expect(result.name).toEqual(correctResult.name);
    expect(result.screen_name).toEqual(correctResult.screen_name);
    expect(result.id).toEqual(correctResult.id);
  });
});
