// main.js
// Function to fetch shipping details from the store's API
const fetchShippingDetails = () => {
    // Make an API call to fetch shipping details
    fetch('/api/shipping-details')
      .then(response => response.json())
      .then(data => {
        // Populate the shipping details section with the retrieved data
        document.getElementById('shipping-address').textContent = `Shipping Address: ${data.address}`;
        document.getElementById('shipping-method').textContent = `Shipping Method: ${data.method}`;
        document.getElementById('estimated-delivery-date').textContent = `Estimated Delivery Date: ${data.deliveryDate}`;
      })
      .catch(error => {
        console.error('Error fetching shipping details:', error);
      });
  };
  
  // Call the function to fetch and populate shipping details
  fetchShippingDetails();
  