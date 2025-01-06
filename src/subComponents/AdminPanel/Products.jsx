import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaFilter } from 'react-icons/fa';

const Products = () => {
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 25.99, stock: 100, category: 'Electronics' },
    { id: 2, name: 'Product 2', price: 45.50, stock: 50, category: 'Clothing' },
    { id: 3, name: 'Product 3', price: 15.00, stock: 200, category: 'Books' },
    { id: 4, name: 'Product 4', price: 100.00, stock: 20, category: 'Furniture' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProductModal, setNewProductModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({ name: '', category: '', minPrice: '', maxPrice: '', inStock: '' });
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    let filtered = initialProducts;

    if (filters.name) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.category) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }
    if (filters.minPrice) {
      filtered = filtered.filter((product) => product.price >= parseFloat(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((product) => product.price <= parseFloat(filters.maxPrice));
    }
    if (filters.inStock === 'true') {
      filtered = filtered.filter((product) => product.stock > 0);
    }
    setFilteredProducts(filtered);
  };

  const handleAddProduct = () => {
    setProducts([
      ...products,
      { id: products.length + 1, ...newProduct, price: parseFloat(newProduct.price), stock: parseInt(newProduct.stock) }
    ]);
    setNewProduct({ name: '', price: '', stock: '', category: '' });
    setNewProductModal(false);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleSaveEdit = () => {
    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id ? { ...editingProduct } : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className='flex flex-row gap-4'>
            <button
            onClick={() => setNewProductModal(true)}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
            <FaPlus className="mr-2" /> Add Product
            </button>
            <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
            <FaFilter className="mr-2" /> Filters
            </button>
        </div>
        
      </div>


      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={filters.name}
              onChange={handleFilterChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={filters.category}
              onChange={handleFilterChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
            <select
              name="inStock"
              value={filters.inStock}
              onChange={handleFilterChange}
              className="p-3 border border-gray-300 rounded-lg"
            >
              <option value="">Stock Status</option>
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </select>
          </div>
        </div>
      )}

      {/* Product Table */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b">Stock</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="p-3 border-b">{product.id}</td>
                <td className="p-3 border-b">{product.name}</td>
                <td className="p-3 border-b">{product.category}</td>
                <td className="p-3 border-b">${product.price.toFixed(2)}</td>
                <td className="p-3 border-b">{product.stock}</td>
                <td className="p-3 border-b flex space-x-2">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="flex items-center bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Product Modal */}
      {newProductModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="number"
                placeholder="Stock Quantity"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex justify-between">
                <button
                  onClick={() => setNewProductModal(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProduct}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
