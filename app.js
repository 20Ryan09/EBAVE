// Login Form Submission
document.getElementById("login-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value; // Now using "email"
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("https://qvwwrhsxva.execute-api.us-west-1.amazonaws.com/prod/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }), // Sending "email" and "password"
    });

    if (!response.ok) {
      const data = await response.json();
      document.getElementById("login-error").textContent =
        data.error || "Invalid email or password.";
      document.getElementById("login-error").style.display = "block"; // Show error
    } else {
      alert("Login successful!");
      window.location.href = "ebave.html"; // Redirect to homepage
    }
  } catch (error) {
    console.error("Login error:", error);
    document.getElementById("login-error").textContent = "An unexpected error occurred. Please try again.";
    document.getElementById("login-error").style.display = "block"; // Show error
  }
});

// Signup Form Submission
document.getElementById("signup-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Fetching input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    // Sending data to API
    const response = await fetch("https://c1dao9b003.execute-api.us-west-1.amazonaws.com/prod/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (!response.ok) {
      // If the API returns an error
      const data = await response.json();
      document.getElementById("signup-error").textContent =
        data.error || "Signup failed. Please try again.";
      document.getElementById("signup-error").style.display = "block";
    } else {
      // Success
      alert("Signup successful! Please log in.");
      window.location.href = "index.html"; // Redirect to login page
    }
  } catch (error) {
    console.error("Signup error:", error);
    document.getElementById("signup-error").textContent = "An unexpected error occurred. Please try again.";
    document.getElementById("signup-error").style.display = "block"; // Show error message
  }
});

