# Bug Notes – Sauce Demo

This document contains observed issues and unexpected behaviors found while testing the Sauce Demo application.

The issues listed below were found during exploratory testing and may represent functional bugs, UX issues, or application limitations.

---
## Bug 1: Browser back navigation shows login error after accessing cart

**Area:** Products / Cart navigation

**Steps to reproduce:**
1. Log in with valid credentials
2. Add any product to the cart
3. Navigate to the Cart page
4. Click the browser Back button

**Expected result:**
User is returned to the Products page while remaining logged in.

**Actual result:**
An error message is displayed:  
"Epic sadface: You can only access '/inventory.html' when you are logged in".

**Severity:** Medium

**Notes:**
This may indicate an issue with session handling or browser navigation support.
 
## Bug 2: Cart button shows login error after clicking on cart button on cart page

**Area:** Cart page

**Steps to reproduce:**
1. Log in with valid credentials
2. Add any product to the cart
3. Navigate to the Cart page
4. Click on chat navigation button

**Expected result:**
There should not be cart navigation button on cart page.

**Actual result:**
An error message is displayed:  
"Epic sadface: You can only access '/inventory.html' when you are logged in".

**Severity:** Medium

**Notes:**
This may indicate an issue with session handling or browser navigation support.

 ## Bug 3: Some product descriptions are vague or not specific to the item

**Area:** Product descriptions

**Steps to reproduce:**
1. Navigate to the Products page
2. Review descriptions of multiple items

**Expected result:**
Each product description clearly and specifically describes the product.

**Actual result:**
Some descriptions appear generic or not clearly related to the specific item.

**Severity:** Low

**Notes:**
This may affect user understanding and purchasing decisions.
