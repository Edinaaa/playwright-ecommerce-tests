# Playwright E-commerce Tests – Sauce Demo

##  Project Overview
This project contains automated end-to-end tests written in Playwright for the Sauce Demo e-commerce application.

The goal of this project is to practice test automation fundamentals and demonstrate a clear, structured approach to testing a real-world web application.

Tests follow the Page Object Model to separate test logic from page structure and improve maintainability.

##  What is being tested
- User authentication (login with valid and invalid credentials)
- Core e-commerce flows such as adding products to cart and checkout (work in progress)

##  Tech Stack
- Playwright
- TypeScript
- Node.js

## ▶How to run the tests
1. Install dependencies:
   ```bash
   npm install
   
##  Testing Approach

This project combines automated end-to-end tests with exploratory testing.

Automation focuses on critical user flows such as login, adding items to the cart, and navigation between pages.
Exploratory testing was used to observe application behavior during non-happy paths, browser navigation, and user-driven actions.
Tests include UI state assertions such as cart badge count to ensure visible feedback matches application state.

Identified issues and observations are documented in the BUG_NOTES.md file.
