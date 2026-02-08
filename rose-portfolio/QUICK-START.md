# Portfolio Website - Quick Start Guide for Non-Programmers

## 🎯 What You Need to Know

This portfolio website is designed to be **super easy to manage** without any programming knowledge!

### You only need to work with 2 things:

## 1️⃣ Adding/Editing Projects

### Step 1: Add Your Images
1. Go to the `public/projects/` folder
2. Drop your project images there
3. Name them clearly (e.g., `my-cool-project.jpg`)

### Step 2: Edit the Project List
1. Open the file: `src/data/projects.json`
2. You'll see a list like this:

```json
[
  {
    "id": "movement-box",
    "title": "The Movement Box Package Design",
    "category": "Uni Projects",
    "image": "/projects/movement-box.jpg",
    "description": "A detailed description...",
    "details": "Extended details..."
  }
]
```

3. To add a new project, copy one of these blocks and change the values:
   - **id**: A unique name (use dashes instead of spaces, like `my-project`)
   - **title**: The project name that shows up on the website
   - **category**: What type of project it is
   - **image**: The path to your image (always starts with `/projects/`)
   - **description**: Short text for the home page
   - **details**: Longer text for the project's own page

4. Save the file!

## 2️⃣ Editing Personal Information

### Home Page
- Open: `src/pages/Home.tsx`
- Look for the text between `<p className="intro">` tags
- Change the text to update your bio

### About Page
- Open: `src/pages/About.tsx`
- Edit the `<p>` tags to change your about text

### Contact Page
- Open: `src/pages/Contact.tsx`
- Add your contact information

## 🚀 Running the Website

To see your changes:
1. Open a terminal/command prompt
2. Navigate to the project folder
3. Run: `npm run dev`
4. Open the URL shown (usually `http://localhost:5173`)

## 🌐 Publishing to the Internet

When ready to publish:
1. Run: `npm run build`
2. Run: `npm run deploy`

Your website will be live at: `https://roseannscott.github.io/Portfolio`

## 📁 Folder Structure

```
📦 rose-portfolio
 ┣ 📂 public
 ┃ ┗ 📂 projects          ← 📸 PUT IMAGES HERE
 ┣ 📂 src
 ┃ ┣ 📂 data
 ┃ ┃ ┗ 📄 projects.json   ← ✏️ EDIT PROJECTS HERE
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📄 Home.tsx        ← Edit home page
 ┃ ┃ ┣ 📄 About.tsx       ← Edit about page
 ┃ ┃ ┗ 📄 Contact.tsx     ← Edit contact page
 ┃ ┗ 📂 components        (Don't touch unless you know what you're doing)
```

## 💡 Tips

- Always use `/projects/` at the start of image paths
- Keep image sizes reasonable (under 2MB each)
- Use `.jpg` or `.png` formats
- Test locally before deploying
- Save files before refreshing the browser

## ❓ Common Tasks

### Adding a New Project
1. Add image to `public/projects/`
2. Add new entry to `projects.json`
3. Refresh the website

### Removing a Project
1. Delete the entry from `projects.json`
2. (Optional) Delete the image from `public/projects/`

### Changing Order of Projects
1. Cut and paste entries in `projects.json`
2. Projects show in the order they appear in the file

## 🆘 Need Help?

If something breaks:
1. Check that all commas are in the right place in `projects.json`
2. Make sure image paths start with `/projects/`
3. Verify all image files exist in the `public/projects/` folder
4. Ask your tech-savvy partner for help!
