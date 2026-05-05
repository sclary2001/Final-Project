# Sean Clary Portfolio

> A personal portfolio website showcasing my military background, IT skills, and web development projects.

## 👤 Author

Sean Clary  
GitHub: https://github.com/sclary2001  
LinkedIn: ADD YOUR LINK HERE

---

## 🧭 User Story

- *As a visitor*
- *I want to view Sean Clary’s background, projects, and contact information*
- *So that I can learn about his experience and technical skills*

---

## 📖 Narrative

This portfolio was created as a final project for a web development course. The goal was to build a clean, functional, and well-structured front-end web application.

I am currently a **2nd Lieutenant in the Alabama National Guard** and a **Computer Information Systems student at the University of North Alabama**. Before commissioning, I served **three years as an enlisted infantry soldier**. I graduated and commissioned from **Marion Military Institute** with my associate degree and completed military training at **Fort Benning, Georgia**.

I chose to build a personal portfolio because it is something I can continue using professionally. This project combines my military background with the web development concepts I learned during the semester.

---

## ⚙️ Features

- Responsive Bootstrap layout
- Photo gallery with personal images
- Dynamic project loading using JSON and Fetch API
- Search/filter functionality
- Login/logout demo with credential hint in the console
- Dark mode toggle using sessionStorage
- Contact form that outputs JSON to the console
- External CSS and JavaScript files
- `@import` used in CSS
- JavaScript module using `type="module"`
- DOM manipulation and event handling

---

## 📂 Project Structure

```bash
FP-Portfolio-/
├── index.html
├── README.md
├── assets/
│   └── images/
│       ├── IMG_4240.jpeg
│       ├── IMG_4272.jpeg
│       ├── IMG_4276.jpeg
│       ├── IMG_1575.jpeg
│       └── IMG_5026.jpeg
├── data/
│   └── projects.json
├── scripts/
│   └── app.js
└── styles/
    └── main.css
```

---

## 🧠 Code Highlight

```js
fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    projects = data;
    displayProjects(projects);
  });
```

### What it does
This code loads project information from `data/projects.json`.

### Why it matters
It separates content from the HTML and makes the portfolio easier to update.

### How it works
The `fetch()` request gets the JSON file, converts it to JavaScript data with `.json()`, and sends that data to `displayProjects()` to create project cards dynamically.

---

## ✅ Validation

- Nu HTML Validator: ADD LINK HERE
- WAVE Accessibility Report: ADD LINK HERE

---

## 🚀 Future Improvements — Sprint 99

GitHub Milestone: Sprint 99

Planned improvements:

- Improve mobile responsiveness
- Add more project entries
- Improve UI styling and animations
- Add project category filters
- Add a resume download link
- Fix minor layout bugs

---

## 🌐 Deployment

- GitHub Pages: https://sclary2001.github.io/FP-Portfolio-/
- GCP VM External IP: ADD LINK HERE

---

## 🔗 Attribution

- Bootstrap: https://getbootstrap.com/
- Bootstrap Icons: https://icons.getbootstrap.com/
- ChatGPT: used for planning, debugging, and README support
- Images: Personal photos provided by Sean Clary

---

## ⭐ Bonus — Professional Networking

- LinkedIn Profile: ADD YOUR LINK HERE
- Connected with instructor on LinkedIn
- Requested to join CSIS LinkedIn Group: https://www.linkedin.com/groups/12058862/

---

## 💡 Professional Reflection

This project represents my growth from basic web development concepts to building a structured and useful portfolio website. My military experience helped me approach the project with discipline, attention to detail, and problem-solving skills.
