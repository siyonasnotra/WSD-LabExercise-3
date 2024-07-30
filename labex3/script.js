// Example: Initialize Leaflet Map
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([latitude, longitude], 13); // Replace with your coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('Your Gym Location')
      .openPopup();
  });
  