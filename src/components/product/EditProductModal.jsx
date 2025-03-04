import { saveEditedProduct } from '../../functions/product/handleSaveEdit';
import { uploadImages } from '../../functions/saveToCloudImage';

export const RenderEditProductModal = ({ editingProduct, setEditingProduct, handleSaveEdit }) => {
  if (!editingProduct) return null;

  const categoryOptions = ["Все", "Цветы", "Игрушки", "Сладости", "Другое"];
  
  // Handle saving the edited product
  const handleSaveEditedProduct = async () => {
    try {
      let updatedProduct = { ...editingProduct };

      // Upload the main image if it's a file (not a URL)
      if (updatedProduct.images?.[0]?.mainImage instanceof File) {
        const uploadedMainImage = await uploadImages([updatedProduct.images[0].mainImage]);
        updatedProduct = {
          ...updatedProduct,
          images: [
            {
              ...updatedProduct.images[0],
              mainImage: uploadedMainImage[0], // Save the Cloudinary URL for the main image
            },
          ],
        };
      }

      // Upload the additional images if any are files
      if (updatedProduct.images?.[0]?.additionalImages?.some((image) => image instanceof File)) {
        const uploadedAdditionalImages = await uploadImages(updatedProduct.images[0].additionalImages);
        updatedProduct = {
          ...updatedProduct,
          images: [
            {
              ...updatedProduct.images[0],
              additionalImages: uploadedAdditionalImages, // Save the Cloudinary URLs for additional images
            },
          ],
        };
      }

      // Send the updated product to the backend
      const updatedProductFromBackend = await saveEditedProduct(updatedProduct);
      console.log('Product saved:', updatedProductFromBackend);

      // Optionally, you can close the modal or update the state after saving
      setEditingProduct(null); // Close the modal after saving
    } catch (error) {
      console.error('Error saving product:', error.message);
    }
  };

  // Handle image deletion
  const handleDeleteImage = (type, index) => {
    if (type === 'main') {
      setEditingProduct((prevState) => ({
        ...prevState,
        images: [
          {
            ...prevState.images[0],
            mainImage: null, // Set mainImage to null to remove it
          },
        ],
      }));
    } else if (type === 'additional') {
      const updatedAdditionalImages = [...editingProduct.images[0]?.additionalImages];
      updatedAdditionalImages.splice(index, 1); // Remove the image at the given index
      
      setEditingProduct((prevState) => ({
        ...prevState,
        images: [
          {
            ...prevState.images[0],
            additionalImages: updatedAdditionalImages, // Update the additionalImages array
          },
        ],
      }));
    }
  };

  // Handle file input for main image
  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    // Temporarily save the file for now and upload it later
    setEditingProduct({
      ...editingProduct,
      images: [
        {
          ...editingProduct.images[0],
          mainImage: file, // Save the file temporarily
        },
      ],
    });
  };

  // Handle file input for additional images
  const handleAdditionalImagesChange = async (e) => {
    const files = Array.from(e.target.files);
    // Temporarily save the files for now and upload them later
    setEditingProduct({
      ...editingProduct,
      images: [
        {
          ...editingProduct.images[0],
          additionalImages: [...editingProduct.images[0].additionalImages, ...files], // Temporarily save the files
        },
      ],
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl text-black font-bold mb-4">Редактировать товар</h2>

        {/* Name and Category in One Row */}
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700 mb-2">Название</label>
            <input
              type="text"
              value={editingProduct.name}
              onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
              className="w-full bg-white text-black p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700 mb-2">Категория</label>
            <select
              value={editingProduct.category}
              onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
              className="w-full bg-white text-black p-2 border border-gray-300 rounded"
            >
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price and Amount in One Row */}
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700 mb-2">Цена</label>
            <input
              type="number"
              value={editingProduct.price}
              onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
              className="w-full bg-white text-black p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700 mb-2">Количество</label>
            <input
              type="number"
              value={editingProduct.stock}
              onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value })}
              className="w-full bg-white text-black p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Описание</label>
          <textarea
            value={editingProduct.description}
            onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
            className="w-full bg-white text-black p-2 border border-gray-300 rounded"
            rows="4"
          />
        </div>

        {/* Offer Type Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Тип предложения</label>
          <select
            value={editingProduct.offerType}
            onChange={(e) => setEditingProduct({ ...editingProduct, offerType: e.target.value })}
            className="w-full bg-white text-black p-2 border border-gray-300 rounded"
          >
            <option value="special">Специальное предложение</option>
            <option value="weekly">Недельное предложение</option>
            <option value="none">Обычные товары</option>
            <option value="special_and_weekly">Специальное и Недельное предложение</option>
          </select>
        </div>
        
        {/* Upload Main Image and Additional Images in One Row */}
        <div className="flex mb-4">
          {/* Main Image */}
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700 mb-2">Главное изображение</label>
            <input
              type="file"
              onChange={handleMainImageChange}
              className="w-full bg-white text-black p-2 border border-gray-300 rounded"
              accept="image/*"
            />
            {editingProduct.images[0]?.mainImage && (
              <div className="relative mt-2">
                <img
                  src={typeof editingProduct.images[0].mainImage === 'string'
                    ? editingProduct.images[0].mainImage // If it's a URL (Cloudinary)
                    : URL.createObjectURL(editingProduct.images[0].mainImage)} // If it's a local file
                  alt="Main Image"
                  className="w-20 h-20 object-cover rounded"
                />
                <div
                  onClick={() => handleDeleteImage('main')}
                  className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1 cursor-pointer"
                >
                  X
                </div>
                <div className="absolute top-0 left-0 bg-green-500 text-white text-xs px-1 rounded-br">
                  Главное
                </div>
              </div>
            )}
          </div>

          {/* Additional Images */}
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700 mb-2">Дополнительные изображения</label>
            <input
              type="file"
              multiple
              onChange={handleAdditionalImagesChange}
              className="w-full bg-white text-black p-2 border border-gray-300 rounded"
              accept="image/*"
            />
            <div className="flex flex-wrap mt-2">
              {editingProduct.images?.[0]?.additionalImages?.map((image, index) => (
                <div key={index} className="relative w-20 h-20 mr-2 mb-2">
                  <img
                    src={typeof image === 'string'
                      ? image // If it's a URL (Cloudinary)
                      : URL.createObjectURL(image)} // If it's a local file
                    alt={`Additional Image ${index}`}
                    className="w-full h-full object-cover rounded"
                  />
                  <div
                    onClick={() => handleDeleteImage('additional', index)}
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1 cursor-pointer"
                  >
                    X
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex justify-end">
          <button
            onClick={() => setEditingProduct(null)}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400"
          >
            Отмена
          </button>
          <button
            onClick={handleSaveEditedProduct}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
