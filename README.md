# Jay Jaiswal - Premium Developer Portfolio

A visually stunning, highly interactive dark-themed portfolio built with modern web technologies. 

Designed to showcase projects, skills, and achievements with smooth animations, 3D elements, and micro-interactions similar to top-tier Silicon Valley engineering portfolios.

## 🚀 Live Demo

[Add your live demo link here once deployed]

## ✨ Features

- **Dark Futuristic Theme**: Glassmorphism UI, smooth gradients, and subtle glow effects.
- **3D Hero Section**: Interactive 3D elements built with React Three Fiber.
- **Smooth Animations**: Powered by Framer Motion for scroll reveals, hover effects, and page transitions.
- **Interactive Particles**: Dynamic background particles that respond to mouse movement.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Performance Focused**: Built with Vite for lightning-fast HMR and optimized production builds.

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **3D Engine**: Three.js & React Three Fiber
- **Icons**: Lucide React & React Icons
- **Particles**: tsParticles

## 🏗️ Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/jayjaiswal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   *Note: `--legacy-peer-deps` is required due to React 19 compatibility with current versions of Three.js related packages.*

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to see the site running locally.

## 📦 Deployment to Vercel

This project is configured out-of-the-box for seamless Vercel deployment.

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click "Add New... -> Project".
3. Import your GitHub repository.
4. Leave all build settings (Framework Preset: Vite, Build Command: `npm run build`) as default.
5. Click **Deploy**.

The `vercel.json` file ensures that client-side routing works correctly in production.

## 📁 File Structure

```text
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer, SectionWrappers, Particles
│   │   └── sections/     # Hero, About, Skills, Projects, Achievements, Contact
│   ├── index.css         # Global Tailwind & Custom styles
│   ├── App.tsx           # Main application entry integrating all sections
│   └── main.tsx          # React DOM rendering
├── index.html            # Entry HTML file with SEO tags and fonts
├── tailwind.config.ts    # Tailwind configuration
└── vite.config.ts        # Vite configuration
```

## 📝 Customization Guide

- **Colors & Typography**: Edit the CSS variables in `src/index.css` to change the global color palette.
- **Content**: Update the data arrays inside each specific section component (e.g., `src/components/sections/Projects.tsx` for projects data).
- **Profile Image**: Add your picture replacing the placeholder section in `src/components/sections/About.tsx`.

## 📄 License

This project is open-source and available under the MIT License.
