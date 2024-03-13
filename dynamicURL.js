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



