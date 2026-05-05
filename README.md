# Sean Clary Portfolio

> A professional portfolio showcasing my military background, technical skills, and web development projects.

---

## 👤 Author

Sean Clary
GitHub: https://github.com/sclary2001
LinkedIn: www.linkedin.com/in/sclary-b25472373

---

## 🧭 User Story

* *As a visitor*
* *I want to view Sean Clary’s background, projects, and contact information*
* *So that I can learn about his experience and technical skills*

---

## 📖 Narrative

This portfolio was developed as a final project to demonstrate front-end web development skills including HTML, CSS, and JavaScript.

I am a **2nd Lieutenant in the Alabama National Guard** and a **Computer Information Systems student at the University of North Alabama**. Prior to commissioning, I served **three years as an enlisted infantry soldier**. I graduated from **Marion Military Institute** and completed training at **Fort Benning, Georgia**.

This project highlights both my technical growth and my ability to build structured, user-friendly applications.

---

## ⚙️ Features

* Responsive layout using Bootstrap
* Photo gallery of personal experience
* Dynamic project display using JSON + Fetch API
* Search/filter functionality
* Login/logout demo (admin / 1234 in console)
* Dark mode toggle (sessionStorage)
* Contact form that outputs JSON
* Clean file structure with external CSS/JS
* DOM manipulation and event handling

---

## 📂 Project Structure

```bash
Final-Project/
├── index.html
├── README.md
├── assets/
│   └── images/
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

Loads project data dynamically from a JSON file.

### Why it matters

Separates content from HTML, making the site scalable and maintainable.

### How it works

Fetch retrieves JSON data and dynamically displays it using DOM manipulation.

---

## ✅ Validation

* HTML Validator: https://validator.w3.org/
* WAVE Accessibility: https://wave.webaim.org/

---

## 🚀 Future Improvements (Sprint 99)

* Improve mobile responsiveness
* Add animations and UI enhancements
* Expand project section
* Add resume download
* Improve accessibility

---

## 🌐 Deployment

* GitHub Pages: https://sclary2001.github.io/Final-Project/
* GCP Deployment:http://34.123.45.67/

---

## 🔗 Attribution

* Bootstrap: https://getbootstrap.com/
* Bootstrap Icons: https://icons.getbootstrap.com/
* ChatGPT: used for development assistance
* Images: Personal photos

---

## ⭐ Bonus

* LinkedIn Profile added
* Connected with instructor
* Requested CSIS LinkedIn group

---

## 💡 Reflection

This project demonstrates my ability to build a structured, functional web application. My military experience contributed to strong organization, discipline, and problem-solving skills throughout development.

Final-Project/
├── index.html
├── README.md
├── assets/
│   └── images/
│       ├── IMG_4240(1).jpeg
│       ├── IMG_4272(1).jpeg
│       ├── IMG_4276(1).jpeg
│       ├── IMG_1575(1).jpeg
│       └── IMG_5026(1).jpeg
├── data/
├── scripts/
└── styles/
Website:
https://sclary2001.github.io/Final-Project/
portfolio, html, css, javascript, web-dev
## 🚀 Featured Project

### Sean Clary Portfolio  
> A professional portfolio showcasing my military and technical experience.

🔗 https://github.com/sclary2001/Final-Project
