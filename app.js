// Login Form Submission
document.getElementById("login-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const identifier = document.getElementById("loginIdentifier").value; // Email/username field
  const password = document.getElementById("loginPassword").value; // Password field

  try {
    const response = await fetch("https://your-login-api-endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }), // Data sent to Login API
    });

    if (!response.ok) {
      const data = await response.json();
      document.getElementById("login-error").textContent =
        data.error || "Your username/email or password is incorrect.";
      document.getElementById("login-error").style.display = "block"; // Show error
    } else {
      alert("Login successful!");
      window.location.href = "ebave.html"; // Replace with your home page
    }
  } catch (error) {
    console.error("Login error:", error);
  }
});

// Signup Form Submission
document.getElementById("signup-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value; // First name field
  const lastName = document.getElementById("lastName").value; // Last name field
  const email = document.getElementById("email").value; // Email field
  const password = document.getElementById("password").value; // Password field

  try {
    const response = await fetch("https://your-signup-api-endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }), // Data sent to Signup API
    });

    if (!response.ok) {
      const data = await response.json();
      document.getElementById("signup-error").textContent =
        data.error || "This email is already in use.";
      document.getElementById("signup-error").style.display = "block"; // Show error
    } else {
      alert("Signup successful! Please log in.");
      window.location.href = "login.html"; // Redirect to login page
    }
  } catch (error) {
    console.error("Signup error:", error);
  }
});
