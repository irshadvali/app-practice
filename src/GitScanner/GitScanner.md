To integrate a code scanner in GitHub for your React project, you can use GitHub's native *CodeQL* or third-party tools like *ESLint*, *SonarCloud*, or Snyk. Here's how to set it up:

# 1. Using GitHub CodeQL
GitHub CodeQL is a static analysis tool for identifying vulnerabilities and bugs in your code.

Steps:
## 1.Enable Code Scanning in GitHub Repository:

Go to your repository.
Navigate to Security > Code scanning alerts > Set up code scanning.
Select Set up this workflow for CodeQL Analysis.
## 2.Customize CodeQL Workflow:

Add a *codeql-analysis.yml* file to *.github/workflows* folder.

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


# 2. Using ESLint for Code Quality

ESLint is a widely used JavaScript/React linter to enforce coding standards and find issues.

Steps:
1-Install ESLint:

``` npm install eslint --save-dev ```

2-Initialize ESLint:

```npx eslint --init```

3-Add ESLint to your GitHub Actions:

    Add a *.github/workflows/eslint.yml* file:

    ```name: ESLint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: Install dependencies
        run: npm install
      - name: Run ESLint
        run: npx eslint . --ext .js,.jsx,.ts,.tsx
   ```

   4-Commit and push the workflow to the repository.

