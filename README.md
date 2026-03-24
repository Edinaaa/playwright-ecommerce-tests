# Playwright E-commerce Tests – Sauce Demo

##  Project Overview
This project demonstrates my Quality Assurance skills, including manual testing, test case design, bug reporting, and automated end-to-end testing using Playwright.

The goal of this project is to simulate a real-world QA workflow by validating core application functionality and ensuring reliability through both manual and automated testing.

##  What is being tested
- User Login
- Form Validation
- Navigation
- Error Handling

##  Tech Stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI pipeline)

## How to run the tests
1. Install dependencies:
   ```bash
   npm install
2. Run the tests:

   npx playwright test
3. Run tests with Playwright UI:

   npx playwright test --ui

##  Testing Approach

This project combines automated end-to-end tests with exploratory testing.

Automation focuses on critical user flows such as login, adding items to the cart, and navigation between pages.
Exploratory testing was used to observe application behavior during non-happy paths, browser navigation, and user-driven actions.
Tests include UI state assertions such as cart badge count to ensure visible feedback matches application state.

Identified issues and observations are documented in the BUG_NOTES.md file.

## QA Coverage

- Manual Testing
- Test Case Design
- Bug Reporting
- Automated Testing (E2E)
- Continuous Integration

## Test Design

Tests follow the Page Object Model pattern and reuse common actions such as login through helper functions to keep the test suite maintainable.
## Project Structure

pages/ - Page Object Model classes  
tests/ – Automated test scripts (Playwright)
test-cases/ – Manual test cases
bug-reports/ – Documented defects
test-plan/ – Testing strategy and scope
test-summary/ – Final testing report

## CI Pipeline

This project includes a CI pipeline using GitHub Actions that automatically runs tests on each push.

## Conclusion

The project demonstrates a structured QA approach, combining manual and automated testing to ensure application quality and reliability.