// ==========================
// Application State
// ==========================

// Central array that stores all products
let products = [];

// ==========================
// DOM References (Main Form)
// ==========================

const prodNameInput = document.querySelector("#prodName");
const prodDescInput = document.querySelector("#prodDesc");
const prodValueInput = document.querySelector("#prodValue");
const btnInclude = document.querySelector("#btnInclude");
const msgArea = document.querySelector("#msgArea");
const tableBody = document.querySelector("#productTableBody");

// ==========================
// Modal References
// ==========================

const viewModal = document.querySelector("#viewModal");
const editModal = document.querySelector("#editModal");
const viewContent = document.querySelector("#viewContent");
const closeViewModal = document.querySelector("#closeViewModal");
const closeEditModal = document.querySelector("#closeEditModal");

// ==========================
// Edit Form References
// ==========================

const editIdInput = document.querySelector("#editId");
const editNameInput = document.querySelector("#editName");
const editDescInput = document.querySelector("#editDesc");
const editValueInput = document.querySelector("#editValue");
const btnSaveEdit = document.querySelector("#btnSaveEdit");

// ==========================
// Load data from localStorage
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  const storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    products = JSON.parse(storedProducts);
    renderTable();
  }
});

// ==========================
// Persistence Helper
// ==========================

function saveToStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

// ==========================
// Validation Helper
// ==========================

function validateInputs(name, desc, value) {
  let errors = [];

  if (!name.trim()) errors.push("Name cannot be empty");
  if (!desc.trim()) errors.push("Description cannot be empty");
  if (!value || isNaN(value) || Number(value) <= 0)
    errors.push("Value must be a positive number");

  return errors;
}

// ==========================
// UI Message Helper
// ==========================

function showMessage(text, type) {
  msgArea.textContent = text;
  msgArea.className = `message ${type}`;

  setTimeout(() => {
    msgArea.style.display = "none";
  }, 3000);
}

// ==========================
// Add Product Logic
// ==========================

btnInclude.addEventListener("click", () => {
  const name = prodNameInput.value;
  const desc = prodDescInput.value;
  const value = prodValueInput.value;

  const errors = validateInputs(name, desc, value);
  if (errors.length > 0) {
    showMessage(`Product creation failed: ${errors.join(", ")}`, "error");
    return;
  }

  const newProduct = {
    id: Date.now(),
    nome: name,
    descricao: desc,
    valor: parseFloat(value),
  };

  products.push(newProduct);
  saveToStorage();
  renderTable();

  showMessage(`Product "${newProduct.nome}" added successfully!`, "success");

  // Clear inputs
  prodNameInput.value = "";
  prodDescInput.value = "";
  prodValueInput.value = "";
});

// ==========================
// Render Product Table
// ==========================

function renderTable() {
  tableBody.innerHTML = "";

  products.forEach((prod) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    const nameSpan = document.createElement("span");
    nameSpan.textContent = prod.nome;
    nameSpan.className = "product-link";
    nameSpan.onclick = () => openViewModal(prod.id);
    nameCell.appendChild(nameSpan);

    const valueCell = document.createElement("td");
    valueCell.textContent = `R$ ${prod.valor.toFixed(2)}`;

    const editCell = document.createElement("td");
    editCell.innerHTML = "✏️";
    editCell.className = "action-icon";
    editCell.onclick = () => openEditModal(prod.id);

    const deleteCell = document.createElement("td");
    deleteCell.innerHTML = "🗑️";
    deleteCell.className = "action-icon";
    deleteCell.onclick = () => deleteProduct(prod.id);

    row.appendChild(nameCell);
    row.appendChild(valueCell);
    row.appendChild(editCell);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  });
}

// ==========================
// Delete Product
// ==========================

function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this product?")) {
    products = products.filter((p) => p.id !== id);
    saveToStorage();
    renderTable();
  }
}

// ==========================
// View Modal Logic
// ==========================

function openViewModal(id) {
  const prod = products.find((p) => p.id === id);
  if (!prod) return;

  viewContent.innerHTML = `
    <p><strong>ID:</strong> ${prod.id}</p>
    <p><strong>Name:</strong> ${prod.nome}</p>
    <p><strong>Description:</strong> ${prod.descricao}</p>
    <p><strong>Price:</strong> R$ ${prod.valor.toFixed(2)}</p>
  `;

  viewModal.style.display = "block";
}

// ==========================
// Edit Modal Logic
// ==========================

function openEditModal(id) {
  const prod = products.find((p) => p.id === id);
  if (!prod) return;

  editIdInput.value = prod.id;
  editNameInput.value = prod.nome;
  editDescInput.value = prod.descricao;
  editValueInput.value = prod.valor;

  editModal.style.display = "block";
}

// ==========================
// Modal Closing Logic
// ==========================

closeViewModal.onclick = () => (viewModal.style.display = "none");
closeEditModal.onclick = () => (editModal.style.display = "none");

window.onclick = (event) => {
  if (event.target === viewModal) viewModal.style.display = "none";
  if (event.target === editModal) editModal.style.display = "none";
};

// ==========================
// Save Edited Product
// ==========================

btnSaveEdit.addEventListener("click", () => {
  const id = parseInt(editIdInput.value);
  const name = editNameInput.value;
  const desc = editDescInput.value;
  const value = editValueInput.value;

  const errors = validateInputs(name, desc, value);
  if (errors.length > 0) {
    alert(`Edit error: ${errors.join(", ")}`);
    return;
  }

  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index].nome = name;
    products[index].descricao = desc;
    products[index].valor = parseFloat(value);

    saveToStorage();
    renderTable();
    editModal.style.display = "none";
  }
});
