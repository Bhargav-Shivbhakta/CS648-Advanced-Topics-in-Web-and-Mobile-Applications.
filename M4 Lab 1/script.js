"use strict";

// ----- Elements -----
const form = document.getElementById("addEmployeeForm");

const empIdEl = document.getElementById("empId");
const fullNameEl = document.getElementById("fullName");
const extensionEl = document.getElementById("extension");
const emailEl = document.getElementById("email");
const departmentEl = document.getElementById("department");

const empCountEl = document.getElementById("empCount");

const employeesTable = document.getElementById("employeesTable");
const employeesTbody = document.getElementById("employeesTbody");

// ----- Count Variable (EXPLICIT as lab says) -----
let employeeCount = 0;
empCountEl.textContent = employeeCount;

// Optional numeric enforcement
empIdEl.addEventListener("input", () => {
  empIdEl.value = empIdEl.value.replace(/\D/g, "");
});

extensionEl.addEventListener("input", () => {
  extensionEl.value = extensionEl.value.replace(/\D/g, "");
});

// ----- Add Employee -----
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = empIdEl.value.trim();
  const name = fullNameEl.value.trim();
  const ext = extensionEl.value.trim();
  const email = emailEl.value.trim();
  const dept = departmentEl.value;

  if (!id || !name || !ext || !email || !dept) return;

  // Insert row into TBODY (matches HTML comment)
  let row = employeesTbody.insertRow();

  let cellId = row.insertCell();
  let cellName = row.insertCell();
  let cellExt = row.insertCell();
  let cellEmail = row.insertCell();
  let cellDept = row.insertCell();
  let cellDelete = row.insertCell();

  cellId.appendChild(document.createTextNode(id));
  cellName.appendChild(document.createTextNode(name));
  cellExt.appendChild(document.createTextNode(ext));
  cellEmail.appendChild(document.createTextNode(email));
  cellDept.appendChild(document.createTextNode(dept));

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "btn btn-danger btn-sm";
  delBtn.textContent = "X";
  delBtn.setAttribute("data-action", "delete");

  cellDelete.appendChild(delBtn);

  // Increment count EXACTLY as lab says
  employeeCount++;
  empCountEl.textContent = employeeCount;

  // Clear form + focus
  form.reset();
  empIdEl.focus();
});

// ----- Delete Employee -----
employeesTable.addEventListener("click", function (e) {
  if (e.target.getAttribute("data-action") === "delete") {
    const confirmDelete = confirm("Are you sure you want to delete this employee?");
    if (!confirmDelete) return;

    const tr = e.target.closest("tr");

    // Matches lab hint style (rowIndex + deleteRow on table)
    employeesTable.deleteRow(tr.rowIndex);

    // Decrement count EXACTLY as lab says
    employeeCount--;
    empCountEl.textContent = employeeCount;
  }
});
