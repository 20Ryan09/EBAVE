document.getElementById('login-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const identifier = document.getElementById('loginIdentifier').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch('https://your-api-endpoint/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      if (data.error === 'invalid_credentials') {
        document.getElementById('login-error').textContent =
          'Your username/email or password is incorrect.';
        document.getElementById('login-error').style.display = 'block';
      }
    } else {
      alert('Login successful! Redirecting...');
      window.location.href = '/dashboard.html';
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
});


document.getElementById('signup-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = { firstName, lastName, email, password };

  // Call backend to create the user
  try {
    const response = await fetch('https://your-api-endpoint/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const data = await response.json();
      if (data.error === 'email_exists') {
        document.getElementById('signup-error').textContent = 'This email is already in use.';
        document.getElementById('signup-error').style.display = 'block';
      }
    } else {
      alert('Signup successful! Redirecting to login...');
      window.location.href = '/login.html';
    }
  } catch (error) {
    console.error('Error during signup:', error);
  }
});
