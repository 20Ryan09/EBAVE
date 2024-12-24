import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const app = document.getElementById('app');

// Load initial page
document.getElementById('home').addEventListener('click', () => {
  app.innerHTML = `<h2>Welcome to EBAVE App</h2>`;
});

document.getElementById('meetings').addEventListener('click', () => {
  app.innerHTML = `
    <h2>Meetings</h2>
    <ul>
      <li>March 18, 2024 - Hosted by John</li>
      <li>April 15, 2024 - Hosted by Jane</li>
    </ul>`;
});

document.getElementById('contributions').addEventListener('click', () => {
  app.innerHTML = `
    <h2>Contributions</h2>
    <p>John: $100</p>
    <p>Jane: $150</p>`;
});

document.getElementById('logout').addEventListener('click', () => {
  app.innerHTML = `<h2>You have logged out.</h2>`;
});
