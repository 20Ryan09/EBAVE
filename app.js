// Login Form Submission
document.getElementById("login-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const identifier = document.getElementById("loginIdentifier").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("https://qvwwrhsxva.execute-api.us-west-1.amazonaws.com/prod/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      document.getElementById("login-error").textContent =
        data.error || "Your username/email or password is incorrect.";
      document.getElementById("login-error").style.display = "block";
    } else {
      alert("Login successful!");
      window.location.href = "ebave.html"; // Redirect to home page
    }
  } catch (error) {
    console.error("Login error:", error);
    document.getElementById("login-error").textContent =
      "An unexpected error occurred. Please try again later.";
    document.getElementById("login-error").style.display = "block";
  }
});

// Signup Form Submission
document.getElementById("signup-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://c1dao9b003.execute-api.us-west-1.amazonaws.com/prod/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      document.getElementById("signup-error").textContent =
        data.error || "This email is already in use.";
      document.getElementById("signup-error").style.display = "block";
    } else {
      alert("Signup successful! Please log in.");
      window.location.href = "index.html"; // Redirect to login page
    }
  } catch (error) {
    console.error("Signup error:", error);
    document.getElementById("signup-error").textContent =
      "An unexpected error occurred. Please try again later.";
    document.getElementById("signup-error").style.display = "block";
  }
});
