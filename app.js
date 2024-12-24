document.getElementById('login-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // TODO: Connect to AWS Cognito for real login
  console.log(`Logging in with Email: ${email}, Password: ${password}`);
  alert('Login functionality coming soon!');
});

document.getElementById('signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // TODO: Connect to AWS Cognito for real signup
  console.log(`Signing up with Name: ${name}, Email: ${email}, Password: ${password}`);
  alert('Sign-up functionality coming soon!');
});
