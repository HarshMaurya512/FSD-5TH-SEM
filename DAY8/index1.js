
// Get Edit and Delete buttons
const editButton = document.querySelector(".edit");
const deleteButton = document.querySelector(".delete");

// Get the student row
const row = document.querySelector(".table tr:nth-child(2)");


// EDIT BUTTON
editButton.addEventListener("click", function () {

    // Get current values
    let name = row.cells[1].textContent;
    let branch = row.cells[2].textContent;
    let rollno = row.cells[3].textContent;
    let contact = row.cells[4].textContent;

    // Ask for new values
    let newName = prompt("Enter Name:", name);
    let newBranch = prompt("Enter Branch:", branch);
    let newRollno = prompt("Enter Roll No:", rollno);
    let newContact = prompt("Enter Contact:", contact);

    // Update table
    if (newName !== null && newName.trim() !== "") {
        row.cells[1].textContent = newName;
    }

    if (newBranch !== null && newBranch.trim() !== "") {
        row.cells[2].textContent = newBranch;
    }

    if (newRollno !== null && newRollno.trim() !== "") {
        row.cells[3].textContent = newRollno;
    }

    if (newContact !== null && newContact.trim() !== "") {
        row.cells[4].textContent = newContact;
    }
});


// DELETE BUTTON
deleteButton.addEventListener("click", function () {

    const confirmDelete = confirm(
        "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
        row.remove();
    }
});