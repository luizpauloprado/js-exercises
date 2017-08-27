import * as E from "./composeExercises";

describe("Compose exercises", () => {
  const CARS = E.CARS;

  it("Exercise 1", () => {
    expect(E.isLastInStock(CARS)).toBeFalsy();
  });

  it("Exercise 2", () => {
    expect(E.nameOfFirstCar(CARS)).toEqual("Ferrari FF");
  });

  it("Exercise 3", () => {
    expect(E.averageDollarValue(CARS)).toEqual(790700);
  });

  it("Exercise 4", () => {
    expect(E.sanitizeNames(CARS)).toEqual([
      "ferrari_ff",
      "spyker_c12_zagato",
      "jaguar_xkr_s",
      "audi_r8",
      "aston_martin_one_77",
      "pagani_huayra"
    ]);
  });

  it("Bonus 1", () => {
    expect(E.availablePrices(CARS)).toEqual("USD 700000, USD 1850000");
  });

  it('Bonus 2', () => {
    expect(E.fastestCar(CARS)).toEqual("Aston Martin One-77");
  });
  
});
