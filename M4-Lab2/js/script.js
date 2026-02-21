"use strict";

const STORAGE_KEY = "employees";

const allowedDepartments = new Set([
  "Administrative",
  "Engineering",
  "Executive",
  "Marketing",
  "QA",
  "Sales",
]);

const deptLabels = { QA: "Quality Assurance" };

const initialEmployees = [
  { id: "12345678", name: "Ava Johnson", extension: "1234", email: "ava.johnson@company.com", department: "Engineering" },
  { id: "23456789", name: "Noah Smith", extension: "2345", email: "noah.smith@company.com", department: "Marketing" },
  { id: "34567890", name: "Mia Davis", extension: "3456", email: "mia.davis@company.com", department: "Sales" },
  { id: "45678901", name: "Liam Brown", extension: "4567", email: "liam.brown@company.com", department: "Administrative" },
  { id: "56789012", name: "Sophia Wilson", extension: "5678", email: "sophia.wilson@company.com", department: "QA" },
];

let employees = loadEmployeesFromStorage() ?? initialEmployees;

const form = document.getElementById("addForm");
const empTable = document.getElementById("empTable");
const empCount = document.getElementById("empCount");

const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");
const extInput = document.getElementById("extension");
const emailInput = document.getElementById("email");
const deptSelect = document.getElementById("department");

buildGrid();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = idInput.value.trim();
  const name = nameInput.value.trim();
  const extension = extInput.value.trim();
  const email = emailInput.value.trim();
  const department = deptSelect.value;

  if (!/^\d{8}$/.test(id)) {
    alert("Employee ID must be exactly 8 digits.");
    idInput.focus();
    return;
  }

  if (!name) {
    alert("Full name is required.");
    nameInput.focus();
    return;
  }

  if (!/^\d{4}$/.test(extension)) {
    alert("Extension must be exactly 4 digits.");
    extInput.focus();
    return;
  }

  if (!emailInput.checkValidity()) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  if (!allowedDepartments.has(department)) {
    alert("Please choose a valid department.");
    deptSelect.focus();
    return;
  }

  if (employees.some((emp) => emp.id === id)) {
    alert(`Employee ID ${id} already exists.`);
    idInput.focus();
    return;
  }

  const newEmployee = { id, name, extension, email, department };
  employees = addEmployee(employees, newEmployee);

  buildGrid();
  form.reset();
  idInput.focus();
});

empTable.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;

  if (!confirm("Are you sure you want to delete this employee?")) return;

  const idToDelete = btn.dataset.id;
  employees = removeEmployee(employees, idToDelete);

  buildGrid();
});

function addEmployee(arr, employee) {
  return [...arr, employee];
}

function removeEmployee(arr, id) {
  return arr.filter((emp) => emp.id !== id);
}

function buildGrid() {
  const tbody = empTable.querySelector("tbody");
  tbody.innerHTML = "";

  for (const emp of employees) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.extension}</td>
      <td>${emp.email}</td>
      <td>${deptLabels[emp.department] ?? emp.department}</td>
      <td><button class="btn btn-sm btn-danger" data-id="${emp.id}">X</button></td>
    `;

    tbody.appendChild(tr);
  }

  empCount.textContent = `(${employees.length})`;
  saveEmployeesToStorage(employees);
}

function saveEmployeesToStorage(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function loadEmployeesFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;

    const valid = parsed.every(
      (e) =>
        e &&
        typeof e.id === "string" &&
        /^\d{8}$/.test(e.id) &&
        typeof e.name === "string" &&
        typeof e.extension === "string" &&
        /^\d{4}$/.test(e.extension) &&
        typeof e.email === "string" &&
        typeof e.department === "string" &&
        allowedDepartments.has(e.department)
    );

    return valid ? parsed : null;
  } catch {
    return null;
  }
}