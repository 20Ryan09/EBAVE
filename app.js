document.getElementById('login-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // TODO: Connect to AWS Cognito for real login
  console.log(`Logging in with Email: ${email}, Password: ${password}`);
  alert('Login functionality coming soon!');
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
