"use strict";

const elCheckBoxBtn = document.querySelector("#checkbox-btn");
const elCheckBoxClear = document.querySelector("#checkbox-clear-btn");
const elCheckBoxResult = document.querySelector("#checkbox-result");
let myData = [];

// ===============Get content from API================
function getContentFromApi(filename, selector) {
    fetch('http://localhost:4000/api/content/' + filename)
        .then(response => response = response.json())
        .then((content) => {
            document.querySelector(selector).innerHTML = marked.parse(content.data) // marked är ett externt bibliotek som hanterar markdown filer (.md)
            hljs.highlightAll(); // hljs (highlight.js) ger syntax-highlight i <code>-taggar.
        })
}
// Gets all the data from the json-files and saves it to the variable myData
function getUsers() {
    fetch("http://localhost:4000/api/users/")
        .then((response) => (response.json()))
        .then((data) => {
            myData = data[0].users;
        });
}

// Get all the checked checkboxes's values and store it in an array called checkboxesChecked
function getCheckedBoxes() {


    let checkboxes = document.getElementsByName('conditions')
    let checkboxesChecked = [];

    checkboxes.forEach((checkbox) => {

        if (checkbox.checked) {
            checkboxesChecked.push(checkbox.value);
        }
    })

    if (checkboxesChecked.length === 0) {
        elCheckBoxResult.textContent = "You must check at least one checkbox";

    } else {
        return checkboxesChecked;
    }
}

// Compares the checked checkboxes array with the data from the json-file
function searchResult() {


    let checkedArray = getCheckedBoxes();
    let searchResult = [];

    // This for-loop goes through the data from the json-file and compares it with the checked checkboxes array
    for (let i = 0; i < myData.length; i++) {

        let newArr = [];

        // This for-loop saves the properties of the object in an array
        for (let property in myData[i]) {
            newArr.push(myData[i][property]);
        }

        // If the every value of checkedArray is present in newArr, the object is pushed to the searchResult array 
        if (checkedArray.every(r => newArr.includes(r))) {

            searchResult.push(myData[i]);

        } else if (searchResult.length === 0) {
            elCheckBoxResult.textContent = `End of result.`;
        }
    }

    tableBuilder(searchResult);
}

// Builds the table with the search result and appends it to the DOM
function tableBuilder(searchResult) {

    let table = document.createElement('table');
    table.setAttribute('id', 'myTable');
    let tr = document.createElement('tr');
    let keysArray = Object.keys(myData[0]);

    // This creates the table header with the keys from the json-file
    keysArray.map((key) => {
        let th = document.createElement('th'); //column
        let text = document.createTextNode(key); //cell
        th.appendChild(text);
        tr.appendChild(th);
    })

    table.appendChild(tr);

    // map through the searchResult array and create a row for each object
    searchResult.map((result) => {
        let tr = document.createElement('tr');
        let valuesArray = Object.values(result);
        valuesArray.map((value) => {
            let td = document.createElement('td');
            let text = document.createTextNode(value);
            td.appendChild(text);
            tr.appendChild(td);
        })
        table.appendChild(tr);
    })

    document.body.appendChild(table);
}

// Clears the table using the remove method
function clearResult() {
    let table1 = document.getElementById('myTable');
    table1.remove();
};

// "listens" to the click event on the button and calls the function searchResult when clicked, same thing for clearResult function.
elCheckBoxBtn.addEventListener("click", searchResult);
elCheckBoxClear.addEventListener("click", clearResult);