1. Install sonar-scanner
Run the following command to install the sonar-scanner package as a development dependency:

```npm install sonar-scanner --save-dev
```

2. Create a sonar-project.properties File
In the root directory of your project, create a sonar-project.properties file with the following content:

```
# Project metadata
sonar.projectKey=your-project-key
sonar.projectName=Your Project Name
sonar.projectVersion=1.0.0

# SonarQube server details
sonar.host.url=http://localhost:9000
sonar.login=your-sonarqube-token

# Paths
sonar.sources=src
sonar.exclusions=**/node_modules/**, **/*.test.js

# Optional: Code coverage report
sonar.javascript.lcov.reportPaths=coverage/lcov.info

```

Replace your-project-key with a unique key for your project.
Replace your-sonarqube-token with the authentication token generated in SonarQube.

3. Add a Script in package.json
Add a script in your package.json file to run the scanner:


```
"scripts": {
  "sonar": "sonar-scanner"
}

```

4. Run SonarQube Scanner
Run the scanner locally with:


```
npm run sonar

```


5. Ensure SonarQube Server is Running
Before running the scanner, make sure your SonarQube server is running locally:

Start your SonarQube server:

```
./bin/<your-os>/sonar.sh start

```

Access the SonarQube dashboard at http://localhost:9000.



Full Example File Setup
package.json

```
{
  "name": "your-project-name",
  "version": "1.0.0",
  "private": true,
  "dependencies": {},
  "devDependencies": {
    "sonar-scanner": "^4.8.0"
  },
  "scripts": {
    "sonar": "sonar-scanner"
  }
}
```


sonar-project.properties

```
# Project metadata
sonar.projectKey=your-project-key
sonar.projectName=Your Project Name
sonar.projectVersion=1.0.0

# SonarQube server details
sonar.host.url=http://localhost:9000
sonar.login=your-sonarqube-token

# Paths
sonar.sources=src
sonar.exclusions=**/node_modules/**, **/*.test.js

# Optional: Code coverage report
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```
```
Advantages of sonar-scanner
Simplicity: Minimal configuration required.
Flexibility: Works well for most Node.js and JavaScript projects.
Integration: Easily integrates into CI/CD pipelines.
```


Here’s an example of a GitHub Actions YAML file to integrate sonar-scanner for SonarQube analysis in your project. This file assumes you are using the sonar-scanner npm package and have already configured a sonar-project.properties file.

.github/workflows/sonarqube.yml


```
name: SonarQube Analysis

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  sonar:
    name: SonarQube Analysis
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the code
      - name: Checkout repository
        uses: actions/checkout@v4

      # Step 2: Set up Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      # Step 3: Install dependencies
      - name: Install dependencies
        run: npm ci

      # Step 4: Run SonarQube analysis
      - name: Run SonarQube Scanner
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }} # Add your SonarQube token in GitHub secrets
        run: |
          npx sonar-scanner \
            -Dsonar.projectKey=your-project-key \
            -Dsonar.sources=src \
            -Dsonar.host.url=http://localhost:9000 \
            -Dsonar.login=${{ secrets.SONAR_TOKEN }} \
            -Dsonar.exclusions=**/node_modules/**,**/*.test.js \
            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
```


Key Points
Environment Variables:

SONAR_TOKEN: Add this in your repository’s secrets (Settings > Secrets > Actions > New secret). Use your SonarQube authentication token here.
Customizing Sonar Scanner:

Replace your-project-key with your unique project key in SonarQube.
Update the sonar.sources and sonar.exclusions paths to match your project structure.
Ensure the sonar.host.url points to your SonarQube server.
Local vs CI/CD:

This YAML is designed for CI/CD pipelines in GitHub Actions.
For local testing, use the npm script npm run sonar with the sonar-project.properties file.
Optional Coverage:

If you have coverage data, ensure the coverage/lcov.info file exists by running your tests with coverage generation enabled.


How to Use
Create this file in .github/workflows/sonarqube.yml.
Push it to your repository.
Ensure the SONAR_TOKEN is added as a secret in your repository settings.
On every push or pull request, the workflow will run and report to SonarQube.