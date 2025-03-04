// Handle deleting a product
export const handleDeleteProduct = async ({productToDelete,products,setProducts,setDeleteModal}) => {

  try {
    // The productToDelete is an ID string, and we should pass it directly in the URL
    const response = await fetch(`https://lianalandingback.onrender.com/api/products/products/${productToDelete}`, {
      method: 'DELETE',
    });

    console.log('Product to delete:', productToDelete);

    if (response.ok) {
      const updatedProducts = products.filter((product) => product._id !== productToDelete);
      setProducts(updatedProducts);
      // applyTabFilter(activeTab, updatedProducts);
      setDeleteModal(false);
    } else {
      console.error('Failed to delete the product');
    }
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};
