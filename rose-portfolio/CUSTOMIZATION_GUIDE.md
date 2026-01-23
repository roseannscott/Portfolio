# 🎨 Rosie's Beautiful Portfolio

A stunning, modular, and fully responsive portfolio website built with React, TypeScript, and Vite. Perfect for showcasing art, design, and creative work!

## ✨ Features

- **Modular Components**: Reusable, easy-to-customize components
- **Fully Responsive**: Beautiful on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and floating elements
- **Portfolio Grid**: Filter and display artwork by category
- **Modal Viewer**: Click to view project details in a modal
- **Dark Gradient Theme**: Modern, eye-catching design
- **SEO Friendly**: Clean semantic HTML structure
- **Accessibility**: WCAG compliant with smooth scroll behavior

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing hero section
│   ├── PortfolioCard.tsx    # Individual portfolio item
│   ├── PortfolioGrid.tsx    # Portfolio grid with filters
│   ├── About.tsx       # About section with skills
│   ├── Contact.tsx     # Contact and social links
│   ├── Footer.tsx      # Footer
│   └── *.css           # Component styles
├── types/
│   └── portfolio.ts    # TypeScript interfaces
├── data/
│   └── portfolio.ts    # Portfolio items and skills data
├── App.tsx             # Main app component
├── App.css             # App styles & modal
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd rose-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🎨 Customization Guide

### 1. **Update Portfolio Items**
Edit `src/data/portfolio.ts` to add your own artwork:

```typescript
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Your Project Title',
    description: 'Project description',
    category: 'Illustration',
    image: 'path/to/your/image.jpg',
    imageAlt: 'Alt text',
    tags: ['tag1', 'tag2'],
    featured: true,
    link: 'https://link-to-project.com'
  },
  // Add more items...
];
```

### 2. **Update Personal Information**
- Change hero tagline in `src/App.tsx`
- Update contact email in `Contact` component usage
- Add social media links in `src/data/portfolio.ts`
- Update about bio in `src/App.tsx` About component

### 3. **Customize Colors**
Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #667eea;      /* Change primary color */
  --secondary-color: #764ba2;    /* Change secondary color */
  --light-bg: #f5f7fa;           /* Change background */
  --dark-text: #333;             /* Change text color */
}
```

### 4. **Update Skills**
Edit `src/data/portfolio.ts`:

```typescript
export const skills: SkillCategory[] = [
  {
    name: 'Your Skill Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // Add more categories...
];
```

### 5. **Add Social Links**
Update `socialLinks` in `src/data/portfolio.ts`:

```typescript
export const socialLinks = {
  instagram: 'https://instagram.com/yourname',
  twitter: 'https://twitter.com/yourname',
  email: 'your.email@example.com',
  dribbble: 'https://dribbble.com/yourname',
  behance: 'https://behance.net/yourname',
};
```

## 📱 Responsive Breakpoints

The site is optimized for:
- **Desktop**: 1024px and up
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🏗️ Component API

### Header
```tsx
<Header onNavClick={(section) => console.log(section)} />
```

### Hero
```tsx
<Hero 
  name="Your Name"
  tagline="Your tagline"
  cta="Call to action button"
/>
```

### PortfolioGrid
```tsx
<PortfolioGrid 
  items={portfolioItems} 
  onItemClick={(item) => console.log(item)}
/>
```

### About
```tsx
<About 
  skillCategories={skills}
  bio="Your bio text"
/>
```

### Contact
```tsx
<Contact 
  email="your.email@example.com"
  socialLinks={socialLinks}
/>
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

Note: Update the `homepage` field in `package.json` with your repository URL.

## 🎯 Tips for Best Results

1. **Images**: Use high-quality images (min 400x300px for cards)
2. **Descriptions**: Keep descriptions concise and engaging
3. **Tags**: Use relevant tags for better categorization
4. **Featured Items**: Mark your best work as featured for emphasis
5. **Links**: Add project links for case studies or live demos
6. **Mobile Testing**: Test on various devices during development

## 🛠️ Technologies Used

- **React 19**: Modern UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool
- **CSS3**: Advanced styling with animations
- **ESLint**: Code quality

## 📝 License

This portfolio template is free to use and customize for personal projects.

## 💡 Future Enhancements

Consider adding:
- Light/dark mode toggle
- Search functionality
- Blog section
- Contact form with email integration
- Image optimization/lazy loading
- Animation library integration (Framer Motion)
- Internationalization (i18n)

---

Made with ✨ and creativity. Enjoy your beautiful portfolio!
