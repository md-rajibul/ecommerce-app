
export default function addToCart(item) {
  // Get current cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Add the new item to the cart
  cart.push(item);
  // Save updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}


