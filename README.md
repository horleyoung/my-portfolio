# Horley.dev — Personal Portfolio

A responsive, single-page developer portfolio built with React and Tailwind CSS. It showcases my projects, services, skills, and background as a frontend developer, with light/dark mode and scroll-driven interactions.

Live site: https://my-portfolio-gray-eta-54.vercel.app/

## Features
  Single-page layout with smooth anchor scrolling between sections
  Light / dark mode toggle with a rotating Sun/Moon icon (class-based dark      mode via Tailwind)
  Scrollspy navigation — the navbar underlines the section currently in view
  Scroll progress bar tracking how far down the page you are
  Data-driven sections — Projects, Services, Skills, and Experience are         rendered with .map() from data arrays, so adding content means editing        data, not markup
  Infinite skills marquee with brand-colored tech icons
  Scroll-reveal animations using Motion
  Fully responsive — mobile-first layout, mobile menu with animated icon        toggle
  Accessible details — visible focus states, aria-labels on icon buttons,       rel="noopener noreferrer" on external links
  Sections

Hero · Projects · Services · Skills · About · Experience · Contact · Footer

## Tech Stack
Category	Tools
Framework	 React (Vite)
Styling	  Tailwind CSS v4
Icons	    lucide-react, react-icons
Animation	Motion, CSS keyframes (skills marquee)
Deployment	Vercel


## Getting Started
Prerequisites: Node.js (v18+ recommended) and npm.

bash
# Clone the repository
git clone https://github.com/horleyoung/<your-repo-name>.git
cd <your-repo-name>

# Install dependencies
npm install

# Start the dev server
npm run dev

The app runs at http://localhost:5173 by default.

Other scripts
bash
npm run build     # Create a production build in /dist
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
Project Structure
src/
├── assets/        # Images and project screenshots
├── components/    # Navbar, Hero, ProjectsSection, Projects, Services,
│                  # Skills, About, Experience, Contacts, Footer
├── data/          # Data arrays: projects, services, skills, tech colors, etc.
├── App.jsx        # Page composition and section dividers
├── App.css
├── index.css      # Tailwind import, dark-mode variant, global styles
└── main.jsx

## Customizing
Add a project: add an object to the projects data array (title, description, image, technologies, live demo link, GitHub link). The grid renders it automatically.
Add a technology tag color: add the tech name and a Tailwind color class to the tech colors file.
Change the accent colors: light mode uses 
#fca311, dark mode uses 
#6049ea — search and replace these values to retheme.

## Deployment
The site is deployed on Vercel. Every push to the main branch triggers an automatic rebuild and redeploy.

## Contact
  GitHub: https://github.com/horleyoung
  LinkedIn: https://www.linkedin.com/in/adepoju-habeeb-979550359/
  X: https://x.com/Horley_blaq
  Email: adepojuhabeeb5@gmail.com

Built by Habeeb as a practice project to sharpen React fundamentals — structure first, styling second.
