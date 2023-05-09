// // Set up authentication
// const headers = new Headers({
//     'X-Cybozu-API-Token': TFqoICjFYxwNVJNENWp4BqqpPt51YrAT02IX968C
//   });
  
//   // Retrieve the current inventory data
//   fetch('https://x26zuy4h5ul8.kintone.com/k/v1/records.json?app=6', {
//     method: 'GET',
//     headers
//   })
//   .then(response => response.json())
//   .then(data => {
//     // Process the inventory data
//     data.records.forEach(record => {
//       const itemCode = record.item_code.value;
//       const currentStock = record.stock.value;
//       const askedQuantity = record.qty.value;
  
//       if (currentStock < askedQuantity) {
//         // Generate a purchase order for the product
//         const newQuantity = askedQuantity - currentStock;
//         const newPurchaseSales = `Order ${newQuantity} units of ${itemCode}`;
  
//         // Update the "Purchase Order" field in the Kintone app
//         fetch(`https://x26zuy4h5ul8.kintone.com/k/v1/record.json?app=6&id=${record.$id.value}`, {
//           method: 'PUT',
//           headers,
//           body: JSON.stringify({
//             record: {
//               stock: {
//                 value: newPurchaseSales
//               }
//             }
//           })
//         })
//         .then(response => response.json())
//         .then(data => {
//           console.log('Purchase order generated successfully:', data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//       } 
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });





// Set up authentication
const headers = new Headers({
    'X-Cybozu-API-Token': 'TFqoICjFYxwNVJNENWp4BqqpPt51YrAT02IX968C'
  });
  
  // Retrieve the current inventory data for the product to be updated
  fetch('https://x26zuy4h5ul8.kintone.com/k/v1/record.json?app=6', {
    method: 'GET',
    headers
  })
  .then(response => response.json())
  .then(data => {
    // Calculate the new stock quantity based on the quantity submitted by the user
    const currentQuantity = record.stock.value;
    const quantitySubmitted = record.qty.value;
    const newQuantity = currentQuantity - quantitySubmitted;
  
    // Update the stock quantity in the Kintone app
    fetch('https://x26zuy4h5ul8.kintone.com/k/v1/record.json', {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        app: 6,
        record: {
          stock: {
            value: newQuantity
          }
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Stock quantity updated successfully:', data);
    })
    .catch(error => {
      console.error(error);
    });
  })
  .catch(error => {
    console.error(error);
  });