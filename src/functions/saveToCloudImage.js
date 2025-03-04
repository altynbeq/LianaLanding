import axios from 'axios';
import imageCompression from 'browser-image-compression'; 

export const uploadImages = async (imageFiles) => {
    const uploadedUrls = [];
    const cloudName = 'dyyyaoggd'; // Your Cloudinary cloud name
    const uploadPreset = 'LianaAI_couplesPhoto'; // Your Cloudinary upload preset
    
    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];

      // Step 1: Compress the image (Optional but recommended)
      const options = {
        maxSizeMB: 1, // Maximum size in MB
        maxWidthOrHeight: 1024, // Max width or height
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);

      // Step 2: Upload the image to Cloudinary
      const formData = new FormData();
      formData.append('file', compressedFile);
      formData.append('upload_preset', uploadPreset);

      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      // Step 3: Get the URL from the Cloudinary response
      const uploadedImageUrl = cloudinaryResponse.data.secure_url;
      uploadedUrls.push(uploadedImageUrl);
    }

    return uploadedUrls;
  };