import * as E from "./composeExercises";

describe("Compose exercises", () => {
  const CARS = E.CARS;

  it("Exercise 1", () => {
    expect(E.isLastInStock(CARS)).toBeFalsy();
  });
});
