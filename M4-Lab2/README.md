# Module 4 -- Lab 2

## The Employee Management Application (Arrays & Web Storage)

**Student Name:** Bhargav Uday Shivbhakta\
**Course:** Web Development\
**Module:** 4\
**Assignment:** Lab 2 -- Employee Management System

------------------------------------------------------------------------

## Overview

This lab builds upon the previous Employee Management Application by
introducing:

-   JavaScript arrays for structured data storage
-   Persistent storage using `localStorage`
-   Dynamic table rendering using `<tbody>` as a DOM hook
-   JSON serialization and parsing for data persistence

The application allows users to:

-   View an initial set of employees
-   Add new employees
-   Delete employees
-   Persist employee data across browser sessions

------------------------------------------------------------------------

## Features Implemented

### 1. Initial Employee Data

-   An array of at least five employees is created.
-   Each employee contains:
    -   Employee ID (8-digit string)
    -   Name (string)
    -   Extension (4-digit string)
    -   Email (string)
    -   Department (string)
-   On page load:
    -   The app checks `localStorage`
    -   If data exists, it loads from storage
    -   Otherwise, it loads the initial array

------------------------------------------------------------------------

### 2. Building the Grid

The grid is dynamically constructed using:

-   `<tbody>` as the DOM hook
-   `innerHTML` to build row structure
-   Template literals for cell creation
-   `appendChild()` to add rows
-   A `for...of` loop to iterate through the employee array

The grid rebuilds automatically when: - The page loads - An employee is
added - An employee is deleted

------------------------------------------------------------------------

### 3. Adding Employees

-   Form submission is handled using JavaScript.

-   Input validation includes:

    -   8-digit employee ID check
    -   4-digit extension check
    -   Valid email format check
    -   Department validation against allowed options
    -   Duplicate ID prevention

-   A new employee object is created.

-   Employees are added using a separate function:

    function addEmployee(arr, employee) { return \[...arr, employee\]; }

------------------------------------------------------------------------

### 4. Removing Employees

-   Delete buttons are dynamically generated.

-   Event delegation is used to handle delete clicks.

-   Removal is handled using a separate function:

    function removeEmployee(arr, id) { return arr.filter(emp =\> emp.id
    !== id); }

-   The grid is rebuilt after removal.

------------------------------------------------------------------------

### 5. Web Storage (localStorage)

The application uses:

-   `JSON.stringify()` to store the employee array
-   `JSON.parse()` to retrieve the array

Data is saved whenever: - The grid is built - An employee is added - An
employee is deleted

On page load: - The application checks if stored data exists - Validates
the structure before using it

------------------------------------------------------------------------

## Technologies Used

-   HTML5
-   Bootstrap 4
-   JavaScript (ES6)
-   DOM Manipulation
-   Web Storage API

------------------------------------------------------------------------

## File Structure

Module4-Lab2/ │ ├── index.html ├── js/ │ └── script.js └── README.md

------------------------------------------------------------------------

## How to Run

1.  Open `index.html` in a web browser.
2.  Add employees using the form.
3.  Close and reopen the browser to verify persistence.
4.  Delete employees as needed.

------------------------------------------------------------------------

## Summary

This lab demonstrates:

-   Proper use of arrays in JavaScript
-   Separation of concerns via helper functions
-   Dynamic DOM manipulation using `<tbody>`
-   Persistent client-side storage
-   Input validation and data integrity enforcement

The application meets all stated requirements of Module 4 Lab 2.

------------------------------------------------------------------------

**Submitted by:**\
Bhargav Uday Shivbhakta
