import React from 'react';
import { handleDoneClick } from '../../functions/imgCloudinary';

export const RenderNewProductModal = ({
  newProduct,
  setNewProduct,
  handleInputChange,
  setNewProductModal,
  handleAddProduct,
}) => {
  const categoryOptions = ["Все", "Цветы", "Игрушки", "Сладости", "Другое"];

  // Ensure additionalImages is always an array
  const initializeImages = () => {
    if (!newProduct.images) {
      setNewProduct({
        ...newProduct,
        images: {
          mainImage: null,
          additionalImages: [],
        },
      });
    } else if (!Array.isArray(newProduct.images.additionalImages)) {
      setNewProduct({
        ...newProduct,
        images: {
          ...newProduct.images,
          additionalImages: [],
        },
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Step 1: Get the updated image URLs from handleDoneClick
      const updatedImageUrls = await handleDoneClick(newProduct);
  
      // Step 2: Create the updated newProduct object with the returned image URLs
      const updatedProduct = {
        ...newProduct,
        images: [{
          mainImage: updatedImageUrls.mainImage, // Set the new main image URL
          additionalImages: updatedImageUrls.additionalImages, // Set the new additional image URLs
        }],
      };
      
      // Step 3: Proceed with the rest of the form submission (e.g., saving the product)
      handleAddProduct(updatedProduct); // Pass the updatedProduct to save it
  
    } catch (error) {
      console.error("Error in submitting the form:", error);
      alert("Произошла ошибка при отправке данных товара. Пожалуйста, попробуйте снова.");
    }
  };
  

  // Handle main image change
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct({
      ...newProduct,
      images: {
        ...newProduct.images,
        mainImage: file,
      },
    });
  };

  // Handle additional images change
  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setNewProduct({
      ...newProduct,
      images: {
        ...newProduct.images,
        additionalImages: [...newProduct.images.additionalImages, ...files],
      },
    });
  };

  // Remove image (either main or additional)
  const removeImage = (type, index) => {
    if (type === 'main') {
      setNewProduct({
        ...newProduct,
        images: {
          ...newProduct.images,
          mainImage: null,
        },
      });
    } else if (type === 'additional') {
      const updatedImages = [...newProduct.images.additionalImages];
      updatedImages.splice(index, 1);
      setNewProduct({
        ...newProduct,
        images: {
          ...newProduct.images,
          additionalImages: updatedImages,
        },
      });
    }
  };

  // Initialize images when the component mounts
  React.useEffect(() => {
    initializeImages();
  }, [newProduct]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
    <h2 className="text-xl text-black font-bold mb-4">Добавить новый товар</h2>
    <form onSubmit={handleSubmit}>
      {/* Product Name */}
      <div className="mb-4">
        <label className="block text-black mb-2">Название</label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          className="w-full p-2 border bg-white text-black border-gray-300 rounded"
          required
        />
      </div>

      {/* Price and Amount in One Row */}
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-gray-700 mb-2">Цена</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="w-full bg-white text-black p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700 mb-2">Количество</label>
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            className="w-full bg-white text-black p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Category and Offer Types in One Row */}
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-gray-700 mb-2">Категория</label>
          <select
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            required
            className="w-full bg-white text-black p-2 border border-gray-300 rounded"
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700 mb-2">Тип предложения</label>
          <div className="flex items-center">
            <label className="flex items-center text-gray-700 mr-4">
              <input
                type="checkbox"
                name="isSpecial"
                checked={newProduct.isSpecial}
                onChange={handleInputChange}
                className="mr-2"
              />
              Специальное предложение
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                name="isWeeklyOffer"
                checked={newProduct.isWeeklyOffer}
                onChange={handleInputChange}
                className="mr-2"
              />
              Недельное предложение
            </label>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Описание</label>
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          className="w-full p-2 border bg-white text-black border-gray-300 rounded"
          rows="4"
          required
        />
      </div>

      {/* Main and Additional Images in One Row */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Изображения</label>
        <div className="flex space-x-4 mb-2">
          {/* Main Image */}
          <div className="w-1/2">
            <input
              type="file"
              name="mainImage"
              onChange={handleMainImageChange}
              accept="image/*"
              className="w-full bg-white text-black p-2 border border-gray-300 rounded mb-2"
            />
            {newProduct?.images?.mainImage && (
              <div className="relative">
                <img
                  // Check if it's a URL (Cloudinary) or a local File object
                  src={typeof newProduct.images.mainImage === 'string'
                    ? newProduct.images.mainImage // If it's a URL from Cloudinary
                    : URL.createObjectURL(newProduct.images.mainImage)} // If it's a local file
                  alt="Main Product"
                  className="w-20 h-20 object-cover rounded"
                />
                <div
                  onClick={() => removeImage('main')}
                  className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1 cursor-pointer"
                >
                  X
                </div>
                <div className="absolute top-0 left-0 bg-green-500 text-white text-xs px-1 rounded-br">
                  Главная
                </div>
              </div>
            )}
          </div>

          {/* Additional Images */}
          <div className="w-1/2">
            <input
              type="file"
              name="additionalImages"
              multiple
              onChange={handleAdditionalImagesChange}
              accept="image/*"
              className="w-full bg-white text-black p-2 border border-gray-300 rounded mb-2"
            />
            <div className="flex flex-wrap">
              {newProduct?.images?.additionalImages &&
                newProduct.images.additionalImages.map((image, index) => (
                  <div key={index} className="relative w-1/4 pr-2 pb-2">
                    <img
                      // Check if it's a URL (Cloudinary) or a local File object
                      src={typeof image === 'string'
                        ? image // If it's a URL from Cloudinary
                        : URL.createObjectURL(image)} // If it's a local file
                      alt={`Additional Product ${index}`}
                      className="w-full h-auto object-cover rounded"
                    />
                    <div
                      onClick={() => removeImage('additional', index)}
                      className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1 cursor-pointer"
                    >
                      X
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Buttons */}
      <div className="flex justify-end">
        <button
          onClick={() => setNewProductModal(false)}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Добавить
        </button>
      </div>
    </form>
  </div>
</div>

  );
};
