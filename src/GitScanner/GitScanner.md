# 1. Using GitHub CodeQL
GitHub CodeQL is a static analysis tool for identifying vulnerabilities and bugs in your code.

Steps:
Enable Code Scanning in GitHub Repository:

Go to your repository.
Navigate to Security > Code scanning alerts > Set up code scanning.
Select Set up this workflow for CodeQL Analysis.
Customize CodeQL Workflow:

Add a codeql-analysis.yml file to .github/workflows folder.

Example workflow:
```
name: "CodeQL"
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: 'weekly'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v3
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v2
      with:
        languages: javascript
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2
```