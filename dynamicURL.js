// Let's take this "state" for example purpose only
const state = {
  brand: "Apex",
  color: "Red",
  fabric: "Denim",
  price: null,
  priceRange: [(0, 4000)],
  size: null,
  sortBy: null,
};

// Deconstruct priceRange
const [minPrice, maxPrice] = state.priceRange;
const priceRange = `${minPrice}-${maxPrice}`;

// Prepare filter parameters with default empty strings if they are null or undefined
const filterParams = {
  fabrics: state.fabric || "",
  colors: state.color || "",
  brands: state.brand || "",
  sizes: state.size || "",
  pricerange: priceRange,
};

// Remove empty filter parameters
const filteredParams = Object.entries(filterParams) // Object Entries Method 
  .filter(([key, value]) => value !== "") // Filter Method
  .map(([key, value]) => `${key}=${value}`) // Map Method
  .join("&"); // Join Method

// Construct the final URL
const url = `http://localhost:5000/filteredproducts?${filteredParams}`;


//-------------------------- 🚀 LEARN USED METHODS 😎---------------------------//

//1️⃣ Object.entries(): 
//Object. entries() is used for listing properties related to an object, listing all the [key, value] pairs of an object.

// const obj = { 10: 'adam', 200: 'billy', 35: 'chris' };
// Displaying the enumerable property [key, value]
// pairs of the object using object.entries() method
// console.log(Object.entries(obj));
// Output: [ [ '10', 'adam' ], [ '35', 'chris' ], [ '200', 'billy' ] ]

//2️⃣ .filter():
//The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length < 6);
// console.log(result);
// OUTPUT: ['spray', 'limit', 'elite']

//3️⃣ .map()
//In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.

// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1);
// Output: Array [2, 8, 18, 32]  

//4️⃣ .join()
//The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. 

// const elements = ['Sun', 'Earth', 'Moon'];
// console.log(elements.join()); // output: "Sun,Earth,Moon"
// console.log(elements.join('')); // output: "SunEarthMoon"
// console.log(elements.join('-')); // output: "Sun-Earth-Moon"
