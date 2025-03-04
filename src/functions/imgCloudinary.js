import { uploadImages } from "./saveToCloudImage";

// Update handleDoneClick to return the URLs
export const handleDoneClick = async (newProduct) => {
  try {
    // Upload main image
    const mainImageUrls = await uploadImages([newProduct.images.mainImage]);

    // Upload additional images
    const additionalImageUrls = await uploadImages(newProduct.images.additionalImages);
    
    // Return the new image URLs
    return {
      mainImage: mainImageUrls[0], // Main image gets the first URL
      additionalImages: additionalImageUrls, // Additional images are an array of URLs
    };
  } catch (error) {
    console.error('Error uploading images:', error);
    alert('Произошла ошибка при отправке фото. Пожалуйста, попробуйте снова.');
    throw error; // Throw error to handle it in the parent function
  }
};
