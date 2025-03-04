import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaFilter, FaStar, FaCalendarWeek } from 'react-icons/fa';
// import NewProductModal from '../comps/NewProductModal';
import DeleteProductModal from '../../subcompents/DeleteProductModal';
// import EditProduct from '../comps/EditProduct';
import { RenderNewProductModal } from '../product/NewProductModal';
import { RenderEditProductModal } from '../product/EditProductModal';
import { handleEditProduct } from '../../functions/product/handleEditProduct';
import { handleDeleteProduct } from '../../functions/product/handleDeleteProduct';
import { handleDoneClick } from '../../functions/imgCloudinary';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProductModal, setNewProductModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ name: '', category: '', minPrice: '', maxPrice: '', inStock: '' });
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', stock: '', category: undefined, isSpecial: false, isWeeklyOffer: false, images: [] });
  const [deleteModal, setDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [activeTab, setActiveTab] = useState('regular');

  // Fetch products from backend on component mount
  useEffect(() => {
    // Fetch products from backend
    const getProducts = async () => {
      try {
        const response = await fetch('https://lianalandingback.onrender.com/api/products/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
  
        const products = await response.json();
        console.log('list of all products', products);
        setProducts(products);
        applyTabFilter(activeTab); // Filter products based on the active tab
  
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
  
    getProducts(); // Call the function to get products
  }, [activeTab]); // Re-run this effect whenever the activeTab changes
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    // Apply both tab filter and search filters
    const tabFiltered = products.filter(product => {
      if (activeTab === 'regular') return !product.isSpecial && !product.isWeeklyOffer;
      if (activeTab === 'special') return product.isSpecial;
      if (activeTab === 'weekly') return product.isWeeklyOffer;
      return true;
    });

    // Then apply the search filters
    let filtered = tabFiltered;

    if (updatedFilters.name) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(updatedFilters.name.toLowerCase())
      );
    }
    if (updatedFilters.category) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(updatedFilters.category.toLowerCase())
      );
    }
    if (updatedFilters.minPrice) {
      filtered = filtered.filter((product) => product.price >= parseFloat(updatedFilters.minPrice));
    }
    if (updatedFilters.maxPrice) {
      filtered = filtered.filter((product) => product.price <= parseFloat(updatedFilters.maxPrice));
    }
    if (updatedFilters.inStock === 'true') {
      filtered = filtered.filter((product) => product.stock > 0);
    }
    
    setFilteredProducts(filtered);
  };

  // products images handle
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      images: files,
    }));
  };

  // Handle form input changes for the new product
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
  
    // Ensure correct updating for the category field
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  const applyTabFilter = (tab) => {
    let filtered;
  
    if (tab === 'regular') {
      // Regular products: those that have "none" as offerType
      filtered = products.filter((product) => product.offerType === 'none');
    } else if (tab === 'special') {
      // Special products: those that have "special" or "special_and_weekly" as offerType
      filtered = products.filter((product) =>
        product.offerType === 'special' || product.offerType === 'special_and_weekly'
      );
    } else if (tab === 'weekly') {
      // Weekly products: those that have "weekly" or "special_and_weekly" as offerType
      filtered = products.filter((product) =>
        product.offerType === 'weekly' || product.offerType === 'special_and_weekly'
      );
    }
  
    // Update filtered products
    setFilteredProducts(filtered);
  };
  
  // Handle adding a new product
  const handleAddProduct = async (updatedProduct) => {
    
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.description) {
      console.error('Product details are incomplete');
      return;
    }

    // const updatedImageUrls = await handleDoneClick(newProduct);
    
    if (newProduct.isSpecial && newProduct.isWeeklyOffer) {
      updatedProduct.offerType = 'special_and_weekly';
    } else if (newProduct.isSpecial) {
      updatedProduct.offerType = 'special';
    } else if (newProduct.isWeeklyOffer) {
      updatedProduct.offerType = 'weekly';
    } else {
      updatedProduct.offerType = 'none';
    }

    
    try {
      const response = await fetch('https://lianalandingback.onrender.com/api/products/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
  
      const addedProduct = await response.json();
  
      // Add the new product to the state
      const updatedProducts = [...products, addedProduct];
      setProducts(updatedProducts);
  
      // // Update filtered products based on the active tab
      // applyTabFilter(activeTab, updatedProducts);
  
      // Close the modal
      setNewProductModal(false);
      setNewProduct({ name: '', price: '', stock: '', category: '', description: '', offerType: '', imageUrl: '', isSpecial: false, isWeeklyOffer: false }); // Reset form
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    applyTabFilter(tab); // Apply the filter based on the selected tab
  };

  // Function to get tab style based on active state
  const getTabStyle = (tabName) => {
    return `px-4 py-2 font-medium rounded-t-lg ${activeTab === tabName 
      ? 'bg-white text-blue-600 border-t border-l border-r border-gray-300' 
      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`;
  };


  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-black font-semibold">Товары</h1>
        <div className="flex flex-row gap-4">
          <button
            onClick={() => setNewProductModal(true)}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            <FaPlus className="mr-2" /> Добавить товар
          </button>
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <FaFilter className="mr-2" /> Фильтры
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg text-black font-semibold mb-3">Фильтры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Название товара"
              value={filters.name}
              onChange={handleFilterChange}
              className="p-3 border bg-white text-black border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="category"
              placeholder="Категория"
              value={filters.category}
              onChange={handleFilterChange}
              className="p-3 border bg-white text-black border-gray-300 rounded-lg"
            />
            <input
              type="number"
              name="minPrice"
              placeholder="Минимальная цена"
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="p-3 border bg-white text-black border-gray-300 rounded-lg"
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Максимальная цена"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="p-3 border bg-white text-black border-gray-300 rounded-lg"
            />
            <select
              name="inStock"
              value={filters.inStock}
              onChange={handleFilterChange}
              className="p-3 border bg-white text-black border-gray-300 rounded-lg"
            >
              <option value="">Наличие на складе</option>
              <option value="true">В наличии</option>
              <option value="false">Нет в наличии</option>
            </select>
          </div>
        </div>
      )}

      {/* Tabs for different product lists */}
      <div className="flex mb-4">
        <button 
          className={getTabStyle('regular')}
          onClick={() => handleTabChange('regular')}
        >
          Обычные товары
        </button>
        <button 
          className={getTabStyle('special')}
          onClick={() => handleTabChange('special')}
        >
          <FaStar className="inline mr-1 text-yellow-500" /> Специальные предложения
        </button>
        <button 
          className={getTabStyle('weekly')}
          onClick={() => handleTabChange('weekly')}
        >
          <FaCalendarWeek className="inline mr-1 text-green-500" /> Недельные предложения
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800  text-left">
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b ">Название</th>
              <th className="p-3 border-b">Категория</th>
              <th className="p-3 border-b">Цена</th>
              <th className="p-3 border-b">Количество</th>
              <th className="p-3 border-b">Действия</th>
            </tr>
          </thead>
          <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product._id} className="hover:bg-gray-100">
                <td className="p-3 border-b">{product.id}</td>
                <td className="p-3 border-b text-black">
                  {product.name}
                  {product.isSpecial && <FaStar className="inline ml-2 text-yellow-500" />}
                  {product.isWeeklyOffer && <FaCalendarWeek className="inline ml-2 text-green-500" />}
                </td>
                <td className="p-3 text-black border-b">{product.category}</td>
                <td className="p-3 text-black border-b">{product.price.toFixed(2)} ₽</td>
                <td className="p-3 text-black border-b">{product.stock}</td>
                <td className="p-3  border-b flex space-x-2 justify-center items-center">
                  <button
                    onClick={() => handleEditProduct({product,setEditingProduct})}
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200 ease-in-out"
                    title="Edit Product"
                  >
                    <FaEdit className="mr-2" />
                  </button>
                  <button
                    onClick={() => {
                      setProductToDelete(product._id);
                      setDeleteModal(true);
                    }}
                    className="flex items-center bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition duration-200 ease-in-out"
                    title="Delete Product"
                  >
                    <FaTrash className="mr-2" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-3 text-center text-gray-500">
                {activeTab === 'regular' && "Нет обычных товаров"}
                {activeTab === 'special' && "Нет специальных предложений"}
                {activeTab === 'weekly' && "Нет недельных предложений"}
              </td>
            </tr>
          )}
        </tbody>
        </table>
      </div>

      {/* Edit Product Modal - Using our custom render function */}
      {editingProduct && 
          <RenderEditProductModal 
              editingProduct={editingProduct} 
              setEditingProduct={setEditingProduct} 
              // handleSaveEdit={handleSaveEdit}
          />
      }
      {/* Delete Product Modal */}
      {deleteModal && <DeleteProductModal products={products} setProducts={setProducts} productToDelete={productToDelete} handleDeleteProduct={handleDeleteProduct} setDeleteModal={setDeleteModal} />}

      {/* Add New Product Modal - Using our custom render function */}
      {newProductModal && 
          <RenderNewProductModal 
              newProduct={newProduct} 
              setNewProduct={setNewProduct} 
              handleAddProduct={handleAddProduct}
              setNewProductModal={setNewProductModal}
              handleInputChange={handleInputChange} 
              handleImageChange={handleImageChange} 
          />
      }
    </div>
  );
};

export default Products;