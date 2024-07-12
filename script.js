// Get the button and contact details div
const showContactButton = document.getElementById('showContactDetails');
const contactDetails = document.getElementById('contactDetails');

// Add event listener to button to toggle visibility of contact details
showContactButton.addEventListener('click', function() {
    if (contactDetails.style.display === 'none' || contactDetails.style.display === '') {
        contactDetails.style.display = 'block';
        showContactButton.textContent = 'Hide Contact Details';
    } else {
        contactDetails.style.display = 'none';
        showContactButton.textContent = 'Show Contact Details';
    }
});
