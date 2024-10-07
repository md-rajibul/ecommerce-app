export default  function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}