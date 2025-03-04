export const createDeal = async (customerData) => {
    try {
      // Prepare data for the deal
      const dealData = {
        fields: {
          TITLE: `Новая подписка для ${customerData.name}. Номер ${customerData.phoneNumber}`,
          NAME: customerData.name,
          PHONE: customerData.phoneNumber,
          crm_contact: [`${customerData.phoneNumber}`],
          SOURCE_DESCRIPTION: 'Сайт Liana Flowers',
        //   EMAIL: customerData.email,
          ASSIGNED_BY_ID: 1, // Example: change as per your setup
          CATEGORY_ID: 1, // Example: change as per your setup
          COMMENTS: `Новая подписка для ${customerData.name}. Номер ${customerData.phoneNumber}`,
          STAGE_ID: 'NEW', // Initial deal stage (change it as per your needs)
          TYPE_ID: 'SUBSCRIPTION', // Deal type, you may want to customize
          // Additional fields as required
        },
      };
  
      // Make the request to the Bitrix24 API
      const response = await fetch(
        'https://romantic-uralsk.bitrix24.kz/rest/164016/0oiq6v5a04x9zykd/crm.deal.add.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dealData),
        }
      );
  
      // Parse the JSON response
      const data = await response.json();
  
      if (data.error) {
        throw new Error(`Error creating deal: ${data.error_description}`);
      }
  
      // If successful, return the deal data
      console.log('Deal created successfully:', data.result);
      return data.result;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Propagate the error for handling in the calling function
    }
  };
  
//   // Example of how to call the function:
//   const customerData = {
//     name: 'John Doe',
//     phone: '+1234567890',
//     email: 'johndoe@example.com',
//   };
  
//   createDeal(customerData)
//     .then((deal) => {
//       console.log('Created deal with ID:', deal.ID);
//     })
//     .catch((error) => {
//       console.error('Error creating deal:', error);
//     });
  