import React from 'react'

const DeleteProductModal = ({setDeleteModal, products,setProducts, productToDelete, handleDeleteProduct}) => {

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg text-black font-semibold mb-4">Удалить товар</h3>
        <p className='text-black'>Вы уверены, что хотите удалить этот товар?</p>
        <div className="flex justify-between mt-4">
            <button
            onClick={() => setDeleteModal(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
            Отмена
            </button>
            <button
            onClick={() => handleDeleteProduct({productToDelete,products,setProducts, setDeleteModal})}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
            Удалить
            </button>
        </div>
        </div>
    </div>
  )
}

export default DeleteProductModal