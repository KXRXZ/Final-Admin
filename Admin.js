// Toggle visibility of widgets on click
document.querySelectorAll('.widget').forEach(widget => {
    widget.addEventListener('click', () => {
        widget.style.display = widget.style.display === 'none' ? 'block' : 'none';
        console.log("Widget toggled:", widget);
    });
});

// Show the Dashboard section and hide others
function showDashboard() {
    console.log("Show Dashboard");
    document.querySelector('.dashboard-content').style.display = 'block';
    document.querySelector('.edit-content').style.display = 'none';
    document.querySelector('.latest-content').style.display = 'none';
    document.getElementById('dashboardHeader').innerText = 'Dashboard';
}

// Show the Edit Interface section and hide others
function showEditInterface() {
    console.log("Show Edit Interface");
    document.querySelector('.dashboard-content').style.display = 'none';
    document.querySelector('.edit-content').style.display = 'block';
    document.querySelector('.latest-content').style.display = 'none';
    document.getElementById('dashboardHeader').innerText = 'Edit Interface';
}

// Show the Latest Interface section and hide others
function showLatestInterface() {
    console.log("Show Latest Interface");
    document.querySelector('.dashboard-content').style.display = 'none';
    document.querySelector('.edit-content').style.display = 'none';
    document.querySelector('.latest-content').style.display = 'block';
    document.getElementById('dashboardHeader').innerText = 'Latest Interface';
}

// Toggle main module visibility in Edit Interface
function toggleMainModule(moduleId) {
    console.log("Toggle module:", moduleId);
    const selectedModule = document.getElementById(moduleId);
    
    if (!selectedModule) {
        console.error("Module not found:", moduleId);
        return;
    }

    if (selectedModule.style.display === 'block') {
        selectedModule.style.display = 'none';
    } else {
        const allModules = document.querySelectorAll('.main-admin-module');
        allModules.forEach(module => {
            module.style.display = 'none';
        });
        selectedModule.style.display = 'block';
    }
}

// Add new category to the table
function addAnimation() {
    const animationName = document.getElementById("animationNameInput").value;
    const categoryCount = document.getElementById("categoryCountInput").value;

    if (animationName && categoryCount !== '') {
        const tableBody = document.querySelector(".table-container tbody");

        const newRow = document.createElement("tr");

        // Category name cell (animation name)
        const nameCell = document.createElement("td");
        nameCell.textContent = categoryCount;

        // Category count cell (animation count)
        const countCell = document.createElement("td");
        countCell.textContent = animationName;

        const actionsCell = document.createElement("td");
        actionsCell.classList.add("actions");

        // Edit button
        const editButton = document.createElement("button");
        editButton.title = "Edit";
        const editIcon = document.createElement("span");
        editIcon.classList.add("icon");
        editIcon.innerHTML = "&#9998;";
        const editText = document.createElement("span");
        editText.innerHTML = "Edit";
        editButton.appendChild(editIcon);
        editButton.appendChild(editText);
        actionsCell.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.title = "Delete";
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("icon");
        deleteIcon.innerHTML = "&#128465;";
        const deleteText = document.createElement("span");
        deleteText.innerHTML = "Delete";
        deleteButton.appendChild(deleteIcon);
        deleteButton.appendChild(deleteText);
        actionsCell.appendChild(deleteButton);

        // Add cells to new row
        newRow.appendChild(nameCell);
        newRow.appendChild(countCell);
        newRow.appendChild(actionsCell);

        // Append new row to the table body
        tableBody.appendChild(newRow);

        // Clear the input fields after adding the row
        document.getElementById("animationNameInput").value = '';
        document.getElementById("categoryCountInput").value = '';
    } else {
        alert("Please fill in both fields before adding a category.");
    }
}
function filterCategory() {
    const selectedCategory = document.getElementById("categoryFilter").value.trim();
    const rows = document.querySelectorAll(".table-container tbody tr");

    rows.forEach(row => {
        const categoryCell = row.cells[0]; // Adjust index if category is in a different cell
        const rowCategory = categoryCell.textContent.trim();

        if (selectedCategory === '' || rowCategory === selectedCategory) {
            row.style.display = ''; // Show row
        } else {
            row.style.display = 'none'; // Hide row
        }
    });
}


// d2 add function sa next button 
function loadNextModule() {
    const currentPage = document.getElementById("pageIndicator").innerText;

    if (currentPage === "Page 1 of 2") {
        // Show Page 2 content and hide Page 1 content
        document.getElementById("page2Content").style.display = 'block';
        document.getElementById("page1Content").style.display = 'none';
        document.getElementById("pageIndicator").innerText = "Page 2 of 2";
    } else if (currentPage === "Page 2 of 2") {
        // Show Page 1 content and hide Page 2 content
        document.getElementById("page1Content").style.display = 'block';
        document.getElementById("page2Content").style.display = 'none';
        document.getElementById("pageIndicator").innerText = "Page 1 of 2";
    }
}
function triggerUpload() {
    document.getElementById('fileInput').click();
}

document.getElementById('fileInput').addEventListener('change', function() {
    if (this.files.length > 0) {
        alert('File selected: ' + this.files[0].name);
    }
});