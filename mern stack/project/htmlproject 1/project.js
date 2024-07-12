// Example JavaScript for seat selection
document.addEventListener('DOMContentLoaded', function() {
  // Generate seat selection UI dynamically
  const seatsContainer = document.getElementById('seatSelection');
  const seats = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3']; // Example seats
  
  seats.forEach(seat => {
    const seatElement = document.createElement('div');
    seatElement.classList.add('seat');
    seatElement.textContent = seat;
    seatElement.addEventListener('click', function() {
      // Handle seat selection logic
      if (this.classList.contains('selected')) {
        this.classList.remove('selected');
        // Logic to cancel seat booking
      } else {
        this.classList.add('selected');
        // Logic to confirm seat booking
      }
    });
    seatsContainer.appendChild(seatElement);
  });
  
  // Example form submission handling
  const bookingForm = document.getElementById('bookingForm');
  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const ticketQuantity = document.getElementById('ticketQuantity').value;
    // Validate and process form data, e.g., send to server for booking
    console.log(name, email, ticketQuantity);
    // Example: Display success message or handle errors
    alert('Tickets booked successfully!');
    bookingForm.reset(); // Reset form after submission
  });
});
