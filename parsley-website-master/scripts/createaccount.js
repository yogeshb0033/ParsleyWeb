// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Get form elements by their IDs
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const acceptTerms = document.getElementById('accept-terms').checked;

  // Perform validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !dob ||
    !password ||
    !confirmPassword ||
    !acceptTerms
  ) {
    alert('Please fill in all fields and accept the terms and conditions.');
  } else if (password !== confirmPassword) {
    alert('Passwords do not match.');
  } else {
    // Check age condition
    const currentDate = new Date();
    const userDOB = new Date(dob);
    let age = currentDate.getFullYear() - userDOB.getFullYear();
    const monthDiff = currentDate.getMonth() - userDOB.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < userDOB.getDate())
    ) {
      age--;
    }

    if (age < 18) {
      alert('You must be 18 years or older to create an account.');
    } else {
      alert(
        'Congratulations! You have successfully created an account. Click OK to go to the login page.'
      );
      // Redirect to the login page
      window.location.href = 'SignIn.html';
    }
  }
}

// Add an event listener to the form submit event
document.getElementById('account-form').addEventListener('submit', submitForm);
