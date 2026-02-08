# Rose-Ann Portfolio Website

A clean, simple portfolio website for displaying graphic design projects.

## 📁 Project Structure

```
rose-portfolio/
├── public/
│   └── projects/          # 📸 Put all project images here
│       ├── project1.jpg
│       └── project2.jpg
│
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx
│   │   └── ProjectCard.tsx
│   │
│   ├── pages/            # Website pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── ProjectDetail.tsx
│   │
│   ├── data/             # ✏️ EDIT PROJECTS HERE
│   │   ├── projects.json # Main file to manage projects
│   │   └── README.md     # Instructions for adding projects
│   │
│   └── App.tsx           # Main app component
│
└── README.md             # This file
```

## 🚀 Getting Started

### Running the Website Locally
```bash
npm install
npm run dev
```

## ✏️ How to Add/Edit Projects

**Your partner only needs to work with 2 locations:**

### 1. Add Project Images
- Put all project images in the `public/projects/` folder
- Use clear names like `movement-box.jpg`, `scottish-indie.jpg`

### 2. Edit Project Information
- Open `src/data/projects.json`
- Add or edit project entries:

```json
{
  "id": "unique-project-name",
  "title": "Project Title",
  "category": "Uni Projects",
  "image": "/projects/your-image.jpg",
  "description": "Short description for home page",
  "details": "Longer description for project page"
}
```

**That's it!** No coding knowledge needed.

## 📝 Customization Guide

### Changing Colors
Edit the color values in the CSS files:
- Pink: `#ffb6c1` or `rgba(255, 182, 193, 0.3)`
- Blue: `#7a8fb8`

### Updating Personal Info
- Home page intro: Edit `src/pages/Home.tsx`
- About page: Edit `src/pages/About.tsx`
- Contact info: Edit `src/pages/Contact.tsx`

### Navigation Links
- Edit `src/components/Navbar.tsx` to change menu items

## 🌐 Deploying

To build for production:
```bash
npm run build
```

To deploy to GitHub Pages:
```bash
npm run deploy
```

## 📚 Tech Stack

- React + TypeScript
- React Router (for navigation)
- Vite (build tool)
- CSS Modules (styling)
