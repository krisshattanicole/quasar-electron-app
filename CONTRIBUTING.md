# Contributing to Quasar Electron App

First off, thank you for considering contributing to this project! It's people like you that make this project such a great tool.

## Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed and what behavior you expected**
* **Include screenshots if possible**
* **Include environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a detailed description of the suggested enhancement**
* **Explain why this enhancement would be useful**
* **List some examples of how this enhancement would be used**

### Pull Requests

* Fill in the required template
* Follow the coding style
* Include appropriate tests
* Update documentation as needed

## Development Setup

### Prerequisites

* Node.js >= 18
* npm >= 6.13.4
* Git

### Setting Up

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR_USERNAME/quasar-electron-app.git

# Navigate to project directory
cd quasar-electron-app

# Install dependencies
npm install

# Create a branch
git checkout -b feature/amazing-feature

# Make your changes and test them
npm run dev

# Commit your changes
git commit -m "feat: add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Open a Pull Request
```

## Coding Style

* Use 2 spaces for indentation
* Use single quotes for strings
* Use semicolons
* Maximum line length: 100 characters
* Follow ESLint rules

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

* `feat:` - New features
* `fix:` - Bug fixes
* `docs:` - Documentation changes
* `style:` - Code style changes (formatting, etc.)
* `refactor:` - Code refactoring
* `test:` - Test changes
* `chore:` - Build process or auxiliary tool changes

Example:
```
feat: add GitHub Actions workflow for releases

- Add release.yml workflow
- Configure automatic asset uploads
- Add release notes generation
```

## Testing

```bash
# Run tests
npm test

# Build and verify
npm run build
```

## Documentation

* Use Markdown for documentation
* Keep documentation up to date
* Include examples where helpful

## Questions?

Feel free to open an issue with the "question" label!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
