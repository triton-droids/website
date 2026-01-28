# Projects Page

The Projects page provides detailed information about Triton Droids' various robotics projects.

**Location:** `src/pages/Projects/components/Projects.tsx`  
**Route:** `/projects`

## Overview

The Projects page showcases detailed information about the Humanoid Robot project, including:

- **Hero Section** - Title, description, and ASCII art visualization
- **Detail Cards** - Rationale, Function, Approach, and Progress sections
- **3D Model Viewer** - Interactive model display (placeholder)
- **Image Gallery** - Carousel of project images

## Page Structure

```
src/pages/Projects/
  ├── components/
  │   ├── Projects.tsx           # Main page component
  │   ├── ProjectHeroSection.tsx # Hero with title and ASCII art
  │   ├── ProjectDetailCard.tsx  # Reusable card for project details
  │   ├── ProjectGallery.tsx     # Image carousel using Embla
  │   └── ModelViewer.tsx        # 3D model viewer placeholder
  └── ProjectsSection.tsx        # Projects overview (used on Home page)
```

## Components

### ProjectHeroSection
Displays the project title, description, and ASCII art asset.

### ProjectDetailCard
Reusable card component with:
- Icon (88px, centered)
- Title (64px, gray #A3B2C2)
- Description (24px, white)
- Fixed width layout for alignment

### ProjectGallery
Image carousel using `embla-carousel-react` with:
- Navigation arrows
- Pagination dots
- Smooth transitions

### ModelViewer
Placeholder for 3D model integration (Three.js, model-viewer, or Sketchfab).

## Related Components

- **ProjectsSection** (`src/pages/Projects/ProjectsSection.tsx`) - Overview component used on Home page

## Assets

Project-related assets are located in:
- `src/assets/projects/` - Project icons and images
  - `humanoid-icon-blue.svg` / `humanoid-icon-gray.svg`
  - `pupper-icon-blue.svg` / `pupper-icon-gray.svg`
  - `robocup-icon-blue.svg` / `robocup-icon-gray.svg`
  - `humanoid-image.jpg`
  - `pupper-image.jpg`
  - `robocup-image.png`
  - `icons/rationale-icon.svg`
  - `icons/function-icon.svg`
  - `icons/approach-icon.svg`
  - `icons/progress-icon.svg`
  - `hero/ascii-art.png`
