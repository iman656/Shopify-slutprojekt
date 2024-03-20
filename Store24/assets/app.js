const fetchShippingDetails = () => {
  fetch("/api/shipping-details").then((response) => response.json()).then((data) => {
    document.getElementById("shipping-address").textContent = `Shipping Address: ${data.address}`;
    document.getElementById("shipping-method").textContent = `Shipping Method: ${data.method}`;
    document.getElementById("estimated-delivery-date").textContent = `Estimated Delivery Date: ${data.deliveryDate}`;
  }).catch((error) => {
    console.error("Error fetching shipping details:", error);
  });
};
fetchShippingDetails();
