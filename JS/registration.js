<script type="text/javascript">
// Get the form and input fields
const form = document.querySelector('form');
const usernameField = document.querySelector('input[name="userName"]');
const passwordField = document.querySelector('input[name="password"]');
const passwordVerifyField = document.querySelector('input[name="passwordVerify"]');
const firstNameField = document.querySelector('input[name="firstName"]');
const lastNameField = document.querySelector('input[name="lastName"]');
const emailField = document.querySelector('input[name="email"]');
const phoneField = document.querySelector('input[name="phoneNumber"]');
const signUpField = document.querySelector('input[name="signUpNewsletter"]');

// Add event listener to the form on submit
form.addEventListener('submit', function(event) {
// Prevent the form from submitting
event.preventDefault();

// Define regular expressions for input validation
const usernameRegex = /^[a-zA-Z0-9]+$/;
const passwordRegex = /^.{8,}$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;

// Validate the username field
if (usernameField.value === '') {
usernameField.nextElementSibling.textContent = 'Please enter a username';
usernameField.focus();
return;
} else if (!usernameRegex.test(usernameField.value)) {
usernameField.nextElementSibling.textContent = 'Username must only contain letters and numbers, no spaces';
usernameField.focus();
return;
}

// Validate the password field
if (passwordField.value === '') {
passwordField.nextElementSibling.textContent = 'Please enter a password';
passwordField.focus();
return;
} else if (!passwordRegex.test(passwordField.value)) {
passwordField.nextElementSibling.textContent = 'Password must be at least 8 characters';
passwordField.focus();
return;
}

// Validate the password verify field
if (passwordVerifyField.value === '') {
passwordVerifyField.nextElementSibling.textContent = 'Please verify your password';
passwordVerifyField.focus();
return;
} else if (passwordVerifyField.value !== passwordField.value) {
passwordVerifyField.nextElementSibling.textContent = 'Passwords must match';
passwordVerifyField.focus();
return;
}

// Validate the first name field
if (firstNameField.value === '') {
firstNameField.nextElementSibling.textContent = 'Please enter your first name';
firstNameField.focus();
return;
}

// Validate the last name field
if (lastNameField.value === '') {
lastNameField.nextElementSibling.textContent = 'Please enter your last name';
lastNameField.focus();
return;
}

// Validate the email field
if (emailField.value !== '' && !emailRegex.test(emailField.value)) {
emailField.nextElementSibling.textContent = 'Please enter a valid email address';
emailField.focus();
return;
}

// Validate the phone number field
if (phoneField.value !== '' && !phoneRegex.test(phoneField.value)) {
phoneField.nextElementSibling.textContent = 'Please enter a valid phone number';
phoneField.focus();
return;
}

// Submit the form
form.submit();
});
</script>