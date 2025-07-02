# DemoQA Playwright Tests

## This repository contains a end-to-end playwright automation project for demoqa.com website. It includes:

1. **"Student registration form functionality test"**
    - submit form with valid input
    - required fields left empty while submission
    - email format validation check
    - mobile number field validation check

2. **"Web table CRUD"**
    - create new entry
    - read/Search entry
    - edit/update entry
    - delete entry

3. **"API testing"**
    - fetch list of books
    - add list of books
    - delete books
    - fetch book by ISBN value
    - delete book by ISBN and provide authorization
    - update book ISBN value


✅ **Tech Stack:**

- "Language: JavaScript"
- "Framework: Playwright Test"
- "Design pattern: Page Object Model(POM)"
- "Reporting: Playwright HTML Report"

---

## How to Run Tests

### PREREQUISITES:
1. [Node.js] (https://nodejs.org/) (v16 or higher recommended)
2. [Git](https://git-scm.com/) (for cloning or version control)
3. Code editor like [VS Code](https://code.visualstudio.com/)

To cheak if node is installed properly open command prompt and run thsi commands -

```bash
node --version
```

```bash
npm --version
```

These command should show the current installed version.

** Create a project folder and open it in VS code. Now open terminal in that project folder location. **

### DEPENDENCIES:

1. run this command to initiate a node project and install playwright (latest) - 
```bash
npm init playwright@latest
```
**Note:** during installation select language 'JavaScript', put end-to-end test in 'tests', add github.

after installation run this command to ensure the playwright installed successfully -
```bash
npx playwright test
```
Should run the example test given successfully. If not then the browsers may not be installed. To seperately install the playwright browsers run this command - 
```bash
npx playwright install
```
This downloads the browser binaries (Chromium, Firefox, WebKit) used by Playwright.

Playwright can also be installed from VS code editor Extension.

### Clone The Repository

Run these commands - 
```bash
git clone https://github.com/samiaparvin/demoqa-playwright-tests.git
```
```bash
cd demoqa-playwright-tests
```

### Run The Tests

```bash
npx playwright test tests/test_form_functionality.spec.js tests/test_table_CRUD.spec.js tests/test_books_api.spec.js
```

This will run all the tests and generate a HTML report. 
To view the report run this  - 
```bash
npx playwright show-report
```

To run specific test file or suite, run this command:  

for student registration form function tests - 
```bash
npx playwright test tests/test_form_functionality.spec.js
```

for web table CRUD function test - 
```bash
npx playwright test tests/test_table_CRUD.spec.js
```

for books APIs test - 
```bash
npx playwright test tests/test_books_api.spec.js
```







