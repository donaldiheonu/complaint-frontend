const togglePopup = document.getElementById("togglePopup");
const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

console.log("Toggle Popup:", togglePopup);

// Function to open popup
const openPopup = () => {
  popup.classList.add("active");
  popupOverlay.classList.add("active");
};

// Function to close popup
const closePopupHandler = () => {
  popup.classList.remove("active");
  popupOverlay.classList.remove("active");
};

// Toggle popup on button click
// togglePopup.addEventListener("click", openPopup);

// Close popup when the close button or overlay is clicked
closePopup.addEventListener("click", closePopupHandler);
popupOverlay.addEventListener("click", closePopupHandler);
