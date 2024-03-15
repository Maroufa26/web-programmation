var originalTable; 
 
function createTable() { 
    var tableSize = parseInt(document.getElementById("tableSize").value); 
         if (tableSize < 1 || tableSize > 50 || isNaN(tableSize)) { 
      alert("Please enter a number between 1 and 50."); 
      return; 
    } 
   
    var table = document.createElement("table"); 
    table.style.borderCollapse = "collapse"; 
    for (var i = 0; i < tableSize; i++) { 
      var row = document.createElement("tr"); 
      row.className = (i % 2 === 0) ? "even-row" : "odd-row";  
      for (var j = 0; j < i + 1; j++) { 
        var cell = document.createElement("td"); 
       // cell.style.border = "1px solid black"; 
        cell.style.padding = "8px"; 
        if (j === 0 || j === i || i === tableSize - 1) { 
          cell.textContent = i + 1; 
          cell.classList.add("blue-cell");
        } 
        row.appendChild(cell); 
      } 
      table.appendChild(row); 
    } 
   
 
    originalTable = table.cloneNode(true); 
 
    document.getElementById("tableContainer").innerHTML = ""; 
    document.getElementById("tableContainer").appendChild(table); 
} 
 
// function supplementaire pour repondre a l'exercice pour defendre le lab
function changeBlueCellColor(){
    var newColor = document.getElementById("newColor").value.trim();
    if (newColor === ""){
        alert("Please enter a new color.");
        return;
    }
    var tableContainer = document.getElementById("tableContainer");
    var blueCells = tableContainer.querySelectorAll(".blue-cell");

    blueCells.forEach(function(cell){
        cell.style.backgroundColor = newColor;
    });
}
function mirrorTable() { 
 
  document.getElementById("tableContainer").innerHTML = ""; 
  document.getElementById("tableContainer").appendChild(originalTable.cloneNode(true)); 
 
  var tableContainer = document.getElementById("tableContainer"); 
  var table = tableContainer.querySelector("table"); 
  if (!table) { 
      alert("Please create a table first."); 
      return; 
  } 
 
  var rows = table.rows; 
  var maxCells = 0; 
 
    for (var i = 0; i < rows.length; i++) { 
      var cellsCount = rows[i].cells.length; 
      if (cellsCount > maxCells) { 
          maxCells = cellsCount; 
      } 
  } 
 
  var newTable = document.createElement("table"); 
  newTable.style.borderCollapse = "collapse"; 
 
  for (var i = 0; i < rows.length; i++) { 
      var newRow = document.createElement("tr"); 
      var cells = rows[i].cells; 
      var diff = maxCells - cells.length; 
 
      for (var k = 0; k < diff; k++) { 
          var emptyCell = document.createElement("td"); 
          emptyCell.style.border = "1px solid black"; 
          emptyCell.style.padding = "8px"; 
          emptyCell.className = "empty-cell"; 
          newRow.appendChild(emptyCell); 
      } 
 
      for (var j = cells.length - 1; j >= 0; j--) { 
          var clonedCell = cells[j].cloneNode(true); 
          newRow.appendChild(clonedCell); 
      } 
 
      newTable.appendChild(newRow); 
  } 
 
  for (var i = 0; i < rows.length; i++) { 
      if (i % 2 === 0) { 
          newTable.rows[i].classList.add("even-row"); 
      } else { 
          newTable.rows[i].classList.add("odd-row"); 
      } 
  } 
 
  var emptyCells = newTable.querySelectorAll(".empty-cell"); 
  emptyCells.forEach(function(cell) { 
      cell.style.border = "none"; 
      cell.style.padding = "0"; 
      cell.style.backgroundColor = "white"; 
      cell.classList.remove("even-row"); 
      cell.classList.remove("odd-row"); 
  }); 
 
  tableContainer.innerHTML = ""; 
  tableContainer.appendChild(newTable); 
} 
 
 
 function sum_or_average() { 
  document.getElementById("tableContainer").innerHTML = ""; 
  document.getElementById("tableContainer").appendChild(originalTable.cloneNode(true)); 
 
  var table = document.querySelector("table"); 
  if (!table) { 
      alert("Please create a table first."); 
      return; 
  } 
 
  var isSum = confirm("Would you like to calculate the sum? If not, it will calculate the average."); 
  var cells = table.querySelectorAll("td"); 
  var cells_odd = table.querySelectorAll(".odd-row td"); 
 
  var total = 0; 
  var count = 0; 
  cells.forEach(function(cell) { 
      var num = parseInt(cell.textContent); 
      if (!isNaN(num)) { 
          total += num; 
          count++; 
      } 
  }); 
 
  var result; 
     if (isSum) { 
      result = total; 
  } else { 
      result = total / count; 
  } 
 
  cells_odd.forEach(function(cell) { 
      var num = parseInt(cell.textContent); 
      if (!isNaN(num)) { 
          cell.textContent = result; 
      } 
  }); 
} 
 
function deleteRows() { 
    document.
getElementById("tableContainer").innerHTML = ""; 
    document.getElementById("tableContainer").appendChild(originalTable.cloneNode(true)); 
 
 
 
    var sumValue = parseInt(prompt("Enter the minimum sum:")); 
    if (isNaN(sumValue)) { 
        alert("Please enter a valid number."); 
        return; 
    } 
   
    var table = document.querySelector("table"); 
    if (!table) { 
        alert("Table not found."); 
        return; 
    } 
   
    var rows = table.querySelectorAll("tr"); 
    rows.forEach(function(row) { 
        var cells = row.querySelectorAll("td"); 
        var rowSum = 0; 
        cells.forEach(function(cell) { 
            var cellValue = parseInt(cell.textContent); 
            if (!isNaN(cellValue)) { 
                rowSum += cellValue; 
            } 
        }); 
        if (rowSum < sumValue) { 
            row.remove(); 
        } 
    }); 
}