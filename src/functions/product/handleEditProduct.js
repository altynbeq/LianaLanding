export const handleEditProduct = async ({ product, setEditingProduct }) => {
  // Fetch the full product data from the backend if it's not already available
  try {
    const response = await fetch(`https://lianalandingback.onrender.com/api/products/products/${product._id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch full product details');
    }

    const fullProduct = await response.json(); // Get full product data from the backend
    setEditingProduct(fullProduct); // Set the full product data to state
  } catch (error) {
    console.error('Error fetching product data:', error.message);
  }
};
