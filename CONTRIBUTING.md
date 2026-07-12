# Contributing to FlyRank AI Capstone

Thank you for your interest in contributing! This project welcomes improvements, bug fixes, and documentation updates.

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/flyrank-ai-internship-capstone-project.git
   cd flyrank-ai-internship-capstone-project
   ```
3. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```

## Development Workflow

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Make your changes following the guidelines in [`CLAUDE.md`](./CLAUDE.md).
3. Run checks locally before opening a PR:
   ```bash
   npm run lint
   npm run build
   ```
4. Commit with a clear, descriptive message.
5. Push your branch and open a Pull Request against `main`.

## Code Standards

- Use functional React components with hooks.
- Keep components modular and reusable.
- Write TypeScript with strict typing — avoid `any`.
- Follow responsive, mobile-first design principles.
- Prefer readability over clever abstractions.

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR.
- Update the README if you change setup steps, scripts, or project structure.
- Ensure CI passes (lint + build).
- Add screenshots for visible UI changes.

## Reporting Issues

Open a [GitHub Issue](https://github.com/GitWithEkam/flyrank-ai-internship-capstone-project/issues) with:

- A clear title and description
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots when applicable

## Questions

For internship-related questions, reach out to the project maintainer directly. For code questions, open a GitHub Issue or Discussion.
