// Student Form Elements
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');



// Function to toggle between signup and signin forms for students
signInButton.addEventListener('click', () => {
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});

signUpButton.addEventListener('click', () => {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

