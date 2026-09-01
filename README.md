# NARA Dental Studio

Concept website for a modern dental clinic, focused on creating a polished, responsive and interactive user experience.

> **Portfolio project:** NARA Dental Studio is a fictional brand created for demonstration purposes. It is not affiliated with a real dental clinic.

## Overview

NARA Dental Studio is a multi-page frontend application designed to demonstrate a modern healthcare website experience.

The project includes treatment exploration, interactive diagnostic-oriented interfaces, case studies, clinic information and a scheduling flow that generates a personalized WhatsApp message.

The goal of the project was to go beyond a traditional landing page and create an experience with reusable components, routing, animations, accessibility considerations and interactive UI elements.

## Features

- Responsive multi-page interface
- Treatment catalog and dynamic treatment detail pages
- Interactive patient concern selector
- Interactive SVG dental arch
- Case and results sections
- Clinic and first-visit information
- Appointment form with validation
- Real-time WhatsApp message preview
- WhatsApp deep-link generation
- Responsive navigation
- Motion-based transitions and reveals
- Reduced-motion support
- Keyboard-accessible interactive elements
- Reusable UI and layout components
- Custom 404 page

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Motion
- Oxlint

## Project Structure

````	ext
src/
  components/
    cases/
    comparison/
    diagnostic/
    layout/
    motion/
    sections/
    ui/
  data/
  lib/
  pages/
  App.tsx
  index.css
  main.tsx
src/
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ cases/
â”‚   â”œâ”€â”€ comparison/
â”‚   â”œâ”€â”€ diagnostic/
â”‚   â”œâ”€â”€ layout/
â”‚   â”œâ”€â”€ motion/
â”‚   â”œâ”€â”€ sections/
â”‚   â””â”€â”€ ui/
â”œâ”€â”€ data/
â”œâ”€â”€ lib/
â”œâ”€â”€ pages/
â”œâ”€â”€ App.tsx
â”œâ”€â”€ index.css
â””â”€â”€ main.tsx
```

## Local Development

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the linter:

```bash
npm run lint
```

## Highlights

### Interactive concern selector

Users can select common dental concerns and explore possible treatment paths through an interactive interface.

The component manages con`	ext
src/
  components/
    cases/
    comparison/
    diagnostic/
    layout/
    motion/
    sections/
    ui/
  data/
  lib/
  pages/
  App.tsx
  index.css
  main.tsxual information, transitions and responsive behavior without treating the interface as a medical diagnostic tool.

### Interactive dental arch

A custom SVG-based dental diagram allows users to explore different anatomical groups such as incisors, canines, premolars and molars.

It supports mouse, keyboard and touch interaction.

### Appointment flow

The scheduling form collects basic information, validates required fields and dynamically generates a WhatsApp message.

The message is previewed before opening WhatsApp, allowing the user to review it before sending.

## Accessibility

The interface includes accessibility considerations such as:

* Semantic HTML
* ARIA attributes where appropriate
* Keyboard-accessible controls
* Form validation feedback
* Reduced-motion support
* Accessible labels for interactive SVG elements

## Project Status

Portfolio / demonstration project.

The contact information, clinic identity, addresses and other business details used in the interface are fictional and exist only for demonstration purposes.

## Author

**Manuel Herrera**

Full Stack Developer

TypeScript, React, Next.js, Node.js, NestJS, PostgreSQL, Docker

