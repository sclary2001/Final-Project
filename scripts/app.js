console.log("Login hint: admin / 1234");

let projects = [];

fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    projects = data;
    displayProjects(projects);
  })
  .catch(error => {
    console.error("Error loading projects:", error);
  });

function displayProjects(list) {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = "";

  list.forEach(project => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card p-3">
          <h5>${project.title}</h5>
          <p>${project.desc}</p>
        </div>
      </div>
    `;
  });
}

document.getElementById("search").addEventListener("input", event => {
  const value = event.target.value.toLowerCase();

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(value)
  );

  displayProjects(filteredProjects);
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  console.log("Contact form JSON:", JSON.stringify(formData));
  event.target.reset();
});

document.getElementById("loginForm").addEventListener("submit", event => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    sessionStorage.setItem("loggedIn", "true");
    document.getElementById("loginStatus").textContent = "Logged in successfully.";
  } else {
    document.getElementById("loginStatus").textContent = "Invalid login.";
  }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  sessionStorage.removeItem("loggedIn");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("loginStatus").textContent = "Logged out.";
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  sessionStorage.setItem("theme", theme);
});

if (sessionStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

sessionStorage.setItem("visited", "true");
