import R from "ramda";

// https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/code/part1_exercises/answers/compose/compose_exercises.js
// https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/code/part1_exercises/answers/compose/compose_exercises_spec.js

// Example Data
export const CARS = [
  {
    name: "Ferrari FF",
    horsepower: 660,
    dollar_value: 700000,
    in_stock: true
  },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false
  },
  {
    name: "Audi R8",
    horsepower: 525,
    dollar_value: 114200,
    in_stock: false
  },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false
  }
];

// Exercise 1:
// ============
// Use _.compose() to rewrite the function below. Hint: _.prop() is curried.
/*var isLastInStock = function(cars) {
  var last_car = _.last(cars);
  return _.prop("in_stock", last_car);
};*/
export const isLastInStock = R.compose(R.prop("in_stock"), R.last);

// Exercise 2:
// ============
// Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.
export const nameOfFirstCar = R.compose(R.prop("name"), R.head);

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition.
const _average = function(xs) {
  return R.reduce(R.add, 0, xs) / xs.length;
}; // <- leave be

/*
var averageDollarValue = function(cars) {
  var dollar_values = _.map(function(c) {
    return c.dollar_value;
  }, cars);
  return _average(dollar_values);
};*/
export const averageDollarValue = R.compose(
  _average,
  R.map(R.prop("dollar_value"))
);

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ['ferrari_ff'].

const _underscore = R.replace(/\W+/g, "_"); //<-- leave this alone and use to sanitize
export const sanitizeNames = R.map(
  R.compose(_underscore, R.toLower, R.prop("name"))
);

// Bonus 1:
// ============
// Refactor availablePrices with compose.
/*
var availablePrices = function(cars) {
  var available_cars = _.filter(_.prop("in_stock"), cars);
  return available_cars
    .map(function(x) {
      return accounting.formatMoney(x.dollar_value);
    })
    .join(", ");
};*/

const formatMoney = val => `USD ${val}`;
const formatPrice = R.compose(formatMoney, R.prop("dollar_value"));
export const availablePrices = R.compose(
  R.join(", "),
  R.map(formatPrice),
  R.filter(R.prop("in_stock"))
);
// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip().
/*
var fastestCar = function(cars) {
  var sorted = _.sortBy(function(car) {
    return car.horsepower;
  }, cars);
  var fastest = _.last(sorted);
  return fastest.name + " is the fastest";
};*/

export const fastestCar = R.compose(R.prop("name"), R.last, R.sortBy(R.prop("horsepower")))