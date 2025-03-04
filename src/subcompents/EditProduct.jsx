import React, { useState } from 'react';

const EditProduct = ({ editingProduct, setEditingProduct, handleSaveEdit }) => {
  const [imagePreview, setImagePreview] = useState(
    editingProduct.image ? URL.createObjectURL(editingProduct.image) : null
  );

  console.log("editing product, ", editingProduct);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditingProduct({ ...editingProduct, image: file });
      setImagePreview(URL.createObjectURL(file)); // Update preview URL
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Редактировать товар</h3>
        <div className="space-y-4">
          <input
            type="text"
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            value={editingProduct.stock}
            onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            value={editingProduct.category}
            onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Описание товара"
            value={editingProduct.description}
            onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg resize-none"
          ></textarea>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 w-full h-40 object-cover rounded-lg border border-gray-300"
              />
            )}
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setEditingProduct(null)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Отмена
            </button>
            <button
              onClick={handleSaveEdit} // Use handleSaveEdit to save the changes
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
