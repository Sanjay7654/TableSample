

// JavaScript function to add a new zodiac to the table
function addZodiac() {
    // Get the table, name, and symbol from the input fields
    const table = document.getElementById("zodiacTable");
    const name = document.getElementById("zodiacName").value.trim();
    const symbol = document.getElementById("zodiacSymbol").value.trim();
    
    // Check if inputs are not empty
    if (name === "" || symbol === "") {
        alert("Please enter both Zodiac Name and Symbol!");
        return;
    }

    // Get the current number of rows to determine the new S.NO
    const rowCount = table.rows.length;

    // Insert a new row at the end of the table
    const newRow = table.insertRow(rowCount);

    // Insert cells into the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // Populate the cells with data
    cell1.innerHTML = rowCount.toString().padStart(2, "0"); // S.NO
    cell2.innerHTML = name; // Zodiac Name
    cell3.innerHTML = symbol; // Zodiac Symbol

    // Clear the input fields
    document.getElementById("zodiacName").value = "";
    document.getElementById("zodiacSymbol").value = "";
    document.getElementsById("prefix").value="";
}

function deleteLastRow() {
    const table = document.getElementById("zodiacTable");
    const rowCount = table.rows.length;

    if (rowCount <= 1) {
        alert("No rows left to delete!");
        return;
    }

    table.deleteRow(rowCount - 1);
}

function updateRow() {
    const table = document.getElementById("zodiacTable");
    const rowIndex = prompt("Enter the row number you want to update (1 for first row):");

    if (!rowIndex || isNaN(rowIndex) || rowIndex <= 0 || rowIndex >= table.rows.length) {
        alert("Invalid row number!");
        return;
    }

    const name = prompt("Enter new Zodiac Name:");
    const symbol = prompt("Enter new Zodiac Symbol (e.g., &#9805;):");

    if (name && symbol) {
        const row = table.rows[rowIndex];
        row.cells[1].innerHTML = name;
        row.cells[2].innerHTML = symbol;
    } else {
        alert("Both name and symbol are required!");
    }
}


function resetTable() {
    const table = document.getElementById("zodiacTable");

    // Clear all rows except the header
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    alert("Table has been reset!");
}
