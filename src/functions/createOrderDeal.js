export const createOrderDeal = async (customerData, products, sum) => {
    try {
      // Prepare data for the deal
      const dealData = {
        fields: {
          TITLE: `Новый заказ для ${customerData.name}. Номер ${customerData.phoneNumber}`,
          NAME: customerData.name,
          PHONE: customerData.phoneNumber,
          КЛИЕНТ: `${customerData.name} Номер ${customerData.phoneNumber}`,
          CRM_CONTACT: [`${customerData.phoneNumber}`], // For linking the customer with the deal
          SOURCE_DESCRIPTION: 'Сайт Liana Flowers',
          ADDITIONAL_INFO: 'INFOOOOO',
          OPPORTUNITY: sum,
          UF_CRM_1669545303248: `${products.map((item) => (
            `Название: ${item.name}, Кол: 1, Цена: ${new Intl.NumberFormat('ru-RU').format(item.price)} ₸.`
          )).join(' ')}`,
          UF_CRM_1669545486330: `${customerData.address}`,
          ASSIGNED_BY_ID: 1, // Example: change as per your setup
          CATEGORY_ID: 1, // Example: change as per your setup
          COMMENTS: `Проверка комента`,
          STAGE_ID: 'NEW', // Initial deal stage (change it as per your needs)
          TYPE_ID: 'Order', // Deal type, you may want to customize
          PRODUCTS: products.map((item) => ({
            PRODUCT_ID: item._id, // Product ID from your product data
            PRICE: item.price, // Price of the product
            QUANTITY: 1, // Assuming 1 for quantity; adjust if needed
            NAME: item.name,
          })),
          // You can add other required fields here
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
  

//   COMMENTS: `Новая подписка для ${customerData.name}. Номер ${customerData.phoneNumber}. Товары ${products.map((item) => ({
//     PRODUCT_ID: item._id, // Product ID from your product data
//     PRICE: item.price, // Price of the product
//     QUANTITY: 1, // Assuming 1 for quantity; adjust if needed
//     NAME: item.name,
//   }))}`,