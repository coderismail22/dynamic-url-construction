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
const filteredParams = Object.entries(filterParams)
  .filter(([key, value]) => value !== "")
  .map(([key, value]) => `${key}=${value}`)
  .join("&");

// Construct the final URL
const url = `http://localhost:5000/filteredproducts?${filteredParams}`;

//FilteredParams Flow:

//(1)After applying Object.entries
// [
//   ["fabrics", "cotton"],
//   ["colors", ""],
//   ["brands", "Nike"],
//   ["sizes", "L"],
//   ["pricerange", "10-50"],
// ];

// (2) After applying .filter()
// [
//   ["fabrics", "cotton"],
//   ["brands", "Nike"],
//   ["sizes", "L"],
//   ["pricerange", "10-50"],
// ];

// (3) After applying .map()
// ["fabrics=cotton", "brands=Nike", "sizes=L", "pricerange=10-50"];

//  (4) After applying .join()
//"fabrics=cotton&brands=Nike&sizes=L&pricerange=10-50"
