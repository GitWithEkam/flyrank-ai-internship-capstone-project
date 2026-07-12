# FlyRank AI Internship Capstone Project

A frontend capstone project developed during the **FlyRank AI Frontend Engineering Internship**. The goal is to build a production-quality React application using modern tooling and AI-assisted development workflows.

> **Status:** Early development — project scaffold and core features are in progress.

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [Environment Variables](#environment-variables)
- [Roadmap](#roadmap)
- [License](#license)
- [Author](#author)

---

## About

This repository documents my work throughout the FlyRank AI internship capstone. It focuses on:

- Building responsive, accessible UI with React and TypeScript
- Following component-driven architecture and clean code practices
- Using AI tools effectively while maintaining code quality and ownership

The application details and feature set will be expanded as development progresses.

---

## Tech Stack

| Category        | Technology   |
| --------------- | ------------ |
| Framework       | React        |
| Build Tool      | Vite         |
| Language        | TypeScript   |
| Styling         | Tailwind CSS *(planned)* |

---

## Prerequisites

Ensure the following are installed before running the project locally:

- **Node.js** — v18 or later ([Download](https://nodejs.org/))
- **npm** — included with Node.js (or use **pnpm** / **yarn** if preferred)

Verify your setup:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/flyrank-ai-internship-capstone-project.git
cd flyrank-ai-internship-capstone-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Vite will hot-reload as you edit files.

### 4. Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR       |
| `npm run build`   | Type-check and bundle for production     |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | Run ESLint *(when configured)*           |

---

## Project Structure

Expected layout once the Vite + React scaffold is in place:

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route-level page components
│   ├── styles/          # Global styles / Tailwind entry
│   ├── App.tsx          # Root application component
│   └── main.tsx         # Application entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Development Guidelines

This project follows standard React best practices:

- Functional components with hooks
- Modular, reusable components
- Responsive, mobile-first design
- Readable, maintainable code over premature abstraction

Additional AI and coding conventions are documented in [`CLAUDE.md`](./CLAUDE.md).

---

## Environment Variables

Create a `.env` file in the project root for local secrets and configuration. This file is gitignored and must not be committed.

```env
# Example — add variables as needed
VITE_API_BASE_URL=
```

> Variables exposed to the client must be prefixed with `VITE_` in Vite projects.

---

## Roadmap

- [ ] Initialize Vite + React + TypeScript scaffold
- [ ] Add Tailwind CSS and base design tokens
- [ ] Implement core UI components and layout
- [ ] Add routing and page structure
- [ ] Configure ESLint and Prettier
- [ ] Deploy to production (TBD)

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Author

**Ekamnoor Singh**

FlyRank AI — Frontend Engineering Internship Capstone (2026)
