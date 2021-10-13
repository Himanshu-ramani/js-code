'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
};

let [main, , secondary] = restaurant.categories;
const { name, openingHours, categories } = restaurant;
// console.log(main, secondary);

// switching variable
// const temp = main;
// main = secondary;
// secondary = main;

// console.log(main, secondary);

//function

// console.log(restaurant.order(2, 0));
// console.log(name, openingHours, categories);

const {
  name: resturentName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resturentName, hours, tags);

//nested objects destructring

const {
  fri: { open: o, close: c },
} = openingHours;

// console.log(o, c);

//////// spread opertors

const newMenu = [...restaurant.mainMenu, 'gnocci'];
const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);

// // iterables:arrays,strings,maps,sets

// const str = 'himanshu';
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// console.log(...str);

// function x() {
//   console.log(this);
// }

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of mainMenu) {
  console.log(item);
}

for (const item of mainMenu.entries()) {
  console.log(item);
}
