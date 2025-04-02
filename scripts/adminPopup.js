const togglePopup = document.getElementById("togglePopup");
const popup = document.getElementById("adminPopup");
const popupOverlay = document.getElementById("adminPopupOverlay");
const closePopup = document.getElementById("closeAdminPopup");


// Function to open popup
const openPopup = () => {
    popup.classList.add("active");
    popupOverlay.classList.add("active");
};

// Function to close popup
const closePopupHandler = () => {
    popup.classList.remove("active");
    popupOverlay.classList.remove("active");
    document.getElementById('updateStatusBtn').style.display = 'none'
    localStorage.removeItem('complaintUUID')
};

// Toggle popup on button click
// togglePopup.addEventListener("click", openPopup);

// Close popup when the close button or overlay is clicked
closePopup.addEventListener("click", closePopupHandler);
popupOverlay.addEventListener("click", closePopupHandler);