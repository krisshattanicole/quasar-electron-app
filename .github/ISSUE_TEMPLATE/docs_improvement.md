name: 📝 Documentation Improvement
description: Suggest improvements to the documentation
title: "[Docs]: "
labels: ["documentation", "triage"]
assignees:
  - krisshattanicole
body:
  - type: markdown
    attributes:
      value: |
        Thanks for helping to improve our documentation!
  - type: textarea
    id: issue
    attributes:
      label: What documentation needs improvement?
      description: Describe what documentation is unclear, incorrect, or missing.
    validations:
      required: true
  - type: textarea
    id: suggestion
    attributes:
      label: Suggested improvement
      description: Describe how you would improve the documentation.
    validations:
      required: true
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
