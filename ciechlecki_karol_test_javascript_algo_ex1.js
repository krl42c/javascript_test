/* Transform a 1D table into a 2D table*/
function transformTable(table) {
    let transformed_table = new Array(table.length)
    for (let i = 0; i < table.length; i++) {
        transformed_table[i] = new Array(9);
        let values = table[i].split(" ");
        transformed_table[i] = values;
    }
    return transformed_table;
}

function displayTable(table) {
    let tag = document.createElement("table");
    tag.setAttribute("border", "1");
    let element = document.getElementById("content");
    element.appendChild(tag);

    table.forEach(element => {
        let tr = document.createElement("tr")
        tag.appendChild(tr);
        element.forEach(value => {
            let td = document.createElement("td");
            tr.appendChild(td);
            let text = document.createTextNode(value);
            td.appendChild(text);
        });
    });
}

new_table = transformTable(array_number);
displayTable(new_table);
