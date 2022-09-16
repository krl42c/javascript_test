function checkLines(table) {
    for (let i = 0; i < table.length; i++) {
        if (!verifyRow(table[i])) {
            drawError(table[i], i, 0);
        }
    }
}

function checkColumns(table) {
    for (let i = 0; i < table.length; i++) {
        let col = [];
        for (let j = 0; j < table.length; j++) {
            col.push(table[j][i]);
        }
        if (!verifyRow(col)) {
            drawError(col, i, 1);
        }
    }
}

function checkRegions(table) {
    let region_number = 0;
    for (let i = 0; i < table.length; i += 3) {
        for (let j = 0; j < table.length; j += 3) {
            let it = 0;
            let region = new Array();
            for (let k = j; k < j + 3; k++) {
                region.push(table[i][k]);
                region.push(table[i + 1][k]);
                region.push(table[i + 2][k]);
            }
            it += 3;
            region_number += 1;
            if (!verifyRow(region)) {
                drawError(region, region_number, 2);
            }
        }
    }
}

/* Although it's not specified in the document, i've added this function to avoid
   polluting the above functions with unnecesary DOM calls and help with code clarity.*/
function drawError(row, position, type) {
    let erorr = "";
    switch (type) {
        /* Adding 1 to position just for display reasons, as indexes start from 0 */
        case 0:
            error = "Line " + (position + 1) + " incorrect";
            break;
        case 1:
            error = "Column " + (position + 1) + " incorrect";
            break;
        case 2:
            error = "Region " + (position + 1) + " incorrect";
            break;
    }
    let table = document.getElementById("error_table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    let error_text = document.createTextNode(error);
    td.appendChild(error_text);

    table.appendChild(tr);
    row.forEach(value => {
        let td = document.createElement("td");
        let value_string = document.createTextNode(value);
        td.appendChild(value_string);
        tr.appendChild(td);
    });
}

table_to_check = transformTable(array_number);

/* Prepare DOM for display */
let table = document.createElement("table");
table.setAttribute("id", "error_table");
table.setAttribute("border", "1");

let element = document.getElementById("content");
element.appendChild(table);


/* Call all check functions */
checkLines(table_to_check);
checkColumns(table_to_check);
checkRegions(table_to_check);