# How to Add/Edit Projects

## Adding a New Project

1. **Add project images** to the `public/projects/` folder
   - Use descriptive names like `my-project.jpg`
   - Recommended size: 800x600px or similar aspect ratio

2. **Edit the projects.json file**
   - Open `src/data/projects.json`
   - Add a new object to the array with these fields:
     ```json
     {
       "id": "unique-project-id",
       "title": "Your Project Title",
       "category": "Uni Projects",
       "image": "/projects/your-image.jpg",
       "description": "Short description for the home page",
       "details": "Longer detailed description for the project page"
     }
     ```

3. **Save the file** - Your project will automatically appear on the website!

## Editing an Existing Project

1. Open `src/data/projects.json`
2. Find the project you want to edit
3. Update any field (title, description, image, etc.)
4. Save the file

## Tips

- The `id` should be unique and URL-friendly (use dashes instead of spaces)
- The `image` path should start with `/projects/` and match the filename in `public/projects/`
- Keep descriptions concise for the home page
- Use the `details` field for longer text on individual project pages
