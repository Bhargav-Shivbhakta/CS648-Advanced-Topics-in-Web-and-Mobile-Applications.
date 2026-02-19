# M4 Lab 1 -- Employee Management System (DOM Version)

## Overview

This lab demonstrates DOM scripting and event handling in JavaScript.\
Users can: - Add employees - View employees in a dynamic table - Delete
employees - Maintain a live employee count

This version uses **pure DOM manipulation** and does not persist data
between sessions.

------------------------------------------------------------------------

## Features

### Add Employee

-   Captures form input values
-   Dynamically inserts a new row into the employee table
-   Uses `insertRow()` and `insertCell()`
-   Clears the form after submission
-   Returns cursor focus to the Employee ID field

### View Employees

-   Dynamically builds table rows
-   Each employee has:
    -   ID
    -   Name
    -   Extension
    -   Email
    -   Department
    -   Delete button

### Delete Employee

-   Uses event delegation
-   Confirms deletion before removing a row
-   Removes row using `deleteRow()`
-   Updates employee count

### Employee Count

-   Maintains a live count in the `<output>` tag
-   Increments on add
-   Decrements on delete

------------------------------------------------------------------------

## Technologies Used

-   HTML5
-   Bootstrap 5
-   JavaScript (DOM API)
-   Event Handling

------------------------------------------------------------------------

## How It Works

### DOM Methods Used

-   `insertRow()`
-   `insertCell()`
-   `deleteRow()`
-   `createTextNode()`
-   `appendChild()`
-   `closest()`

### Event Handling

-   `submit` event for adding employees
-   `click` event for deleting employees
-   `preventDefault()` to stop page reload

------------------------------------------------------------------------

## File Structure

    index.html
    styles.css
    script.js
    README.md

------------------------------------------------------------------------

## Notes

-   Data does NOT persist after browser refresh.
-   This lab focuses strictly on DOM manipulation.
-   Later versions will implement arrays and localStorage for
    persistence.

------------------------------------------------------------------------

## Author

Student Submission -- M4 Lab 1 (DOM Version)
