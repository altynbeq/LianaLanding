export const saveEditedProduct = async (updatedProduct) => {
  try {
    // Assuming you have the product ID to update the specific product
    const response = await fetch(`https://lianalandingback.onrender.com/api/products/products/${updatedProduct._id}`, {
      method: 'PUT', // Using PUT request for updating
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct), // Send the updated product data as JSON
    });

    if (!response.ok) {
      throw new Error('Failed to save edited product');
    }

    const savedProduct = await response.json();
    console.log('Product saved successfully:', savedProduct);
    return savedProduct; // You can use this to show a success message or update UI
  } catch (error) {
    console.error('Error saving product:', error.message);
    // Handle error (e.g., show an error message to the user)
  }
};
