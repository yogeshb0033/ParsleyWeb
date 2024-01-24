function validateForm() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return false;
  }

  return true;
}

function validateEmail(email) {
  // A simple regular expression for basic email validation.
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
function handleLogin() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value;
  const password = passwordInput.value;

  // Replace this with your actual authentication logic
  // For this example, let's assume email is "user@gmail.com" and password is "password"
  if (email === 'user@gmail.com' && password === 'password') {
    alertWithRedirect(
      'Successfully Signed in! You can go back to the home page.',
      'index.html'
    );
  } else {
    alert('Invalid credentials. Please try again.');
    // Clear the form inputs
    emailInput.value = '';
    passwordInput.value = '';
  }
}

function alertWithRedirect(message, url) {
  if (confirm(message)) {
    window.location.href = url;
  }
}
