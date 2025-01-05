const { expect } = require("chai");
const game = require("../src/00-objectball.js");

describe("Object Ball Lab", () => {
  it("should return the correct points for Alan Anderson", () => {
    const points = game.numPointsScored("Alan Anderson");
    expect(points).to.equal(22);
  });

  it("should return the shoe size of Reggie Evans", () => {
    const shoeSize = game.shoeSize("Reggie Evans");
    expect(shoeSize).to.equal(14);
  });

  it("should return the team colors for Brooklyn Nets", () => {
    const colors = game.teamColors("Brooklyn Nets");
    expect(colors).to.deep.equal(["Black", "White"]);
  });

  it("should return all team names", () => {
    const teams = game.teamNames();
    expect(teams).to.include("Brooklyn Nets");
    expect(teams).to.include("Charlotte Hornets");
  });

  it("should return player stats for Brook Lopez", () => {
    const stats = game.playerStats("Brook Lopez");
    expect(stats).to.include({ points: 17, rebounds: 19 });
  });
  
  it("should return the rebounds of the player with the biggest shoe size", () => {
    const rebounds = game.bigShoeRebounds();
    expect(rebounds).to.equal(12); // Mason Plumlee has the largest shoe size and 12 rebounds
  });

  it("should return true if the player with the longest name has the most steals", () => {
    const result = game.doesLongNameStealATon();
    expect(result).to.equal(true); // Brendan Haywood has the longest name and the most steals
  });
});

