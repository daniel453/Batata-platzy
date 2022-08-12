let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');
let table1 = document.getElementById('table-container');
let table2 = document.getElementById('table-container2');

rightArrow.addEventListener("click", function nextTable() {
    table1.style.display = 'none';
    table2.style.display = 'flex'
})

leftArrow.addEventListener("click", function backTable() {
    table1.style.display = 'flex';
    table2.style.display = 'none';
})

