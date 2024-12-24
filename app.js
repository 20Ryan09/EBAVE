// Switch between Login and Signup forms
document.getElementById("login-toggle").addEventListener("click", () => {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-toggle").classList.add("active");
  document.getElementById("signup-toggle").classList.remove("active");
});

document.getElementById("signup-toggle").addEventListener("click", () => {
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-toggle").classList.add("active");
  document.getElementById("login-toggle").classList.remove("active");
});

document.getElementById("switch-to-signup")?.addEventListener("click", () => {
  document.getElementById("signup-toggle").click();
});

document.getElementById("switch-to-login")?.addEventListener("click", () => {
  document.getElementById("login-toggle").click();
});

// Submit Login Form
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
        data.error || "An error occurred. Please try again.";
      document.getElementById("login-error").style.display = "block";
    } else {
      alert("Login successful!");
      window.location.href = "/dashboard.html";
    }
  } catch (error) {
    console.error("Login error:", error);
  }
});

// Submit Signup Form
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
        data.error || "An error occurred. Please try again.";
      document.getElementById("signup-error").style.display = "block";
    } else {
      alert("Signup successful! Please log in.");
      document.getElementById("login-toggle").click();
    }
  } catch (error) {
    console.error("Signup error:", error);
  }
});
