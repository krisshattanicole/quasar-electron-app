name: Pull Request
description: Create a pull request to contribute to the project
title: ""
labels: []
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        Thanks for creating a pull request! Please fill out this form to help us review your changes.
  - type: input
    id: related-issue
    attributes:
      label: Related Issue
      description: Link to the issue this PR addresses (if applicable)
      placeholder: ex. Fixes #123
    validations:
      required: false
  - type: dropdown
    id: type
    attributes:
      label: Type of Change
      description: What type of change is this?
      options:
        - Bug fix (non-breaking change that fixes an issue)
        - New feature (non-breaking change that adds functionality)
        - Breaking change (fix or feature that would cause existing functionality to change)
        - Documentation update
        - Code refactoring
        - Performance improvement
        - Test update
        - Chore (build, CI, tooling, etc.)
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Description
      description: A clear and concise description of what this PR does.
    validations:
      required: true
  - type: textarea
    id: testing
    attributes:
      label: How Has This Been Tested?
      description: Describe the tests you ran to verify your changes.
      placeholder: |
        - [ ] Unit tests
        - [ ] Integration tests
        - [ ] Manual testing
        Details:
    validations:
      required: true
  - type: textarea
    id: checklist
    attributes:
      label: Checklist
      description: Ensure your PR meets these requirements
      value: |
        - [ ] My code follows the style guidelines
        - [ ] I have performed a self-review of my code
        - [ ] I have commented my code, particularly in hard-to-understand areas
        - [ ] I have made corresponding changes to the documentation
        - [ ] My changes generate no new warnings
        - [ ] I have added tests that prove my fix is effective or that my feature works
        - [ ] New and existing tests pass locally with my changes
    validations:
      required: true
  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots (if applicable)
      description: Add screenshots to help explain your changes.
    validations:
      required: false
  - type: textarea
    id: additional-context
    attributes:
      label: Additional Context
      description: Add any other context about the pull request here.
    validations:
      required: false
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this pull request, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
