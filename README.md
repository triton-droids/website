# Triton Droids

A React + Vite + Tailwind CSS website for Triton Droids, UCSD's humanoid robotics club.

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Dev Container

This project includes a Dev Container configuration. To use it:

1. Open the project in VS Code
2. When prompted, click "Reopen in Container"
3. Or use the Command Palette: `Dev Containers: Reopen in Container`

The container will automatically install dependencies on first launch.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/          # Page components
  ├── App.jsx         # Main app component with routing
  ├── main.jsx        # Entry point
  └── index.css       # Global styles with Tailwind
```
