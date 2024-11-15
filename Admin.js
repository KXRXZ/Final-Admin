// Toggle visibility of widgets on click
document.querySelectorAll(".widget").forEach((widget) => {
  widget.addEventListener("click", () => {
    widget.style.display = widget.style.display === "none" ? "block" : "none";
    console.log("Widget toggled:", widget);
  });
});

// Show the Dashboard section and hide others
function showDashboard() {
  console.log("Show Dashboard");
  document.querySelector(".dashboard-content").style.display = "block";
  document.querySelector(".userdashboard-content").style.display = "none";
  document.querySelector(".latest-content").style.display = "none";
  document.getElementById("dashboardHeader").innerText = "Dashboard";
}

// Show the Control Management section and hide others
function showControlManagement() {
  console.log("Show Control Management");
  document.querySelector(".dashboard-content").style.display = "none";
  document.querySelector(".userdashboard-content").style.display = "block";
  document.querySelector(".latest-content").style.display = "none";
  document.getElementById("dashboardHeader").innerText = "Control Management";
}

// Show the Latest Interface section and hide others
function showLatestInterface() {
  console.log("Show Latest Interface");
  document.getElementById("dashboard-content").style.display = "none";
  document.getElementById("userdashboard-content").style.display = "none";
  document.getElementById("latest-content").style.display = "block";
  document.getElementById("dashboardHeader").innerText = "Latest Interface";
}

function toggleMainModule(moduleId) {
  console.log("Toggling module:", moduleId);
  // Hide all sections
  const modules = document.querySelectorAll(".main-admin-module");
  modules.forEach((module) => {
    module.style.display = "none";
  });

  // Show the selected section
  const selectedModule = document.getElementById(moduleId);
  if (selectedModule) {
    console.log("Showing module:", moduleId);
    selectedModule.style.display = "block";
  }
}


  // Add new category to the table
  function addAnimation() {
    const animationName = document.getElementById("animationNameInput").value;
    const categoryCount = document.getElementById("categoryCountInput").value;
    const animationVideoInput = document.getElementById("animationVideoInput");

    if (
      animationName &&
      categoryCount !== "" &&
      animationVideoInput.files.length > 0
    ) {
      const tableBody = document.querySelector(".table-container tbody");

      const newRow = document.createElement("tr");

      // Category name cell
      const nameCell = document.createElement("td");
      nameCell.textContent = categoryCount;

      // Animation name cell
      const countCell = document.createElement("td");
      countCell.textContent = animationName;

      // Video file name cell
      const videoCell = document.createElement("td");
      const fileName = animationVideoInput.files[0].name;
      const fileNameText = document.createTextNode(fileName);
      videoCell.appendChild(fileNameText);

      // Actions cell
      const actionsCell = document.createElement("td");
      actionsCell.classList.add("actions");

      // Edit button
      const editButton = document.createElement("button");
      editButton.title = "Edit";
      editButton.innerHTML = "&#9998; Edit";
      actionsCell.appendChild(editButton);

      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.title = "Delete";
      deleteButton.innerHTML = "&#128465; Delete";
      actionsCell.appendChild(deleteButton);

      // Add cells to new row
      newRow.appendChild(nameCell);
      newRow.appendChild(countCell);
      newRow.appendChild(videoCell);
      newRow.appendChild(actionsCell);

      // Append new row to the table body
      tableBody.appendChild(newRow);

      // Clear the input fields after adding the row
      document.getElementById("animationNameInput").value = "";
      document.getElementById("categoryCountInput").value = "";

      // Reset the file label and clear file input
      document.getElementById("fileLabel").textContent = "No file chosen";
      animationVideoInput.value = "";
    } else {
      alert("Please fill in all fields before adding the animation.");
    }
  }

function filterCategory() {
  const selectedCategory = document
    .getElementById("categoryFilter")
    .value.trim();
  const rows = document.querySelectorAll(".table-container tbody tr");

  rows.forEach((row) => {
    const categoryCell = row.cells[0]; // Adjust index if category is in a different cell
    const rowCategory = categoryCell.textContent.trim();

    if (selectedCategory === "" || rowCategory === selectedCategory) {
      row.style.display = ""; // Show row
    } else {
      row.style.display = "none"; // Hide row
    }
  });
}

function triggerUpload() {
  document.getElementById("fileInput").click();
}

// Update label when a file is chosen
document
  .getElementById("animationVideoInput")
  .addEventListener("change", function () {
    const fileName = this.files[0] ? this.files[0].name : "No file chosen";
    document.getElementById("fileLabel").textContent = fileName;  
  });


function loadNextModule() {
  const page1 = document.getElementById("page1Content");
  const page2 = document.getElementById("page2Content");

  // If page1 is visible, switch to page2
  if (page1.style.display !== "none") {
    page1.style.display = "none";
    page2.style.display = "block";
  } 
  // If page2 is visible, switch to page1
  else if (page2.style.display !== "none") {
    page1.style.display = "block";
    page2.style.display = "none";
  }
}

  // Function to trigger file input click
function triggerUpload(fileInputId) {
  document.getElementById(fileInputId).click();
}

// Function to open the "Add Account" modal
window.openModal = function() {
  document.getElementById('accountModal').style.display = 'block';
};