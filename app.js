// Login Form Submission
document.getElementById("login-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const identifier = document.getElementById("loginIdentifier").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("https://your-api-endpoint/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      document.getElementById("login-error").textContent =
        data.error || "Your username/email or password is incorrect.";
      document.getElementById("login-error").style.display = "block";
    } else {
      alert("Login successful!");
      window.location.href = "/dashboard.html"; // Replace with your dashboard URL
    }
  } catch (error) {
    console.error("Login error:", error);
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
    const response = await fetch("https://your-api-endpoint/signup", {
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
      window.location.href = "login.html";
    }
  } catch (error) {
    console.error("Signup error:", error);
  }
});
