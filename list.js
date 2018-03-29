class List{
    constructor(list, listHeaders){
        this.list = list;
        this.listHeaders = listHeaders;
    }
    drawTable(element, listName){
        let list = this.list;
        let listHeaders = this.listHeaders;
        if(this.list){
            let h1 = document.createElement("h1");
            h1.appendChild(document.createTextNode(listName));
            let table = document.createElement("table");
            let tbody = document.createElement("tbody");
            listHeaders.forEach(header => {
                let th = document.createElement("th");
                th.appendChild(document.createTextNode(header));
                table.appendChild(th);
            });
            Object.values(list).forEach(obj => {
                let tr = document.createElement("tr");
                Object.values(obj).forEach(attribute => {
                    let td = document.createElement("td");
                    td.appendChild(document.createTextNode(attribute));
                    tr.appendChild(td);
                });
                let tdDelete = document.createElement("td");
                let deleteBtn = document.createElement("button");
                let tdUpdate = document.createElement("td");
                let updateBtn = document.createElement("button");
                deleteBtn.setAttribute("class","delete-btn");
                deleteBtn.appendChild(document.createTextNode("Delete"));
                updateBtn.setAttribute("class","update-btn");
                updateBtn.appendChild(document.createTextNode("Edit"));
                tdDelete.appendChild(deleteBtn);
                tdUpdate.appendChild(updateBtn);
                tr.appendChild(tdDelete);
                tr.appendChild(tdUpdate);
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);
            element.appendChild(h1);
            element.appendChild(table);
        }
    }
    createTableListeners(){
        let updateBtns = document.querySelectorAll(".update-btn");
        let deleteBtns = document.querySelectorAll(".delete-btn");
        updateBtns.forEach(btn => {
            btn.addEventListener("click", function(e){
                List.prototype.updateLine(e);
            });
        });
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", function(e){
                List.prototype.deleteLine(e);
            });
        });
    }
    deleteLine(e){
        let list = this.list;
        let button = e.target;
        let column = button.parentNode;
        let row = column.parentNode;
        let name = row.firstChild.textContent;
        row.parentNode.removeChild(row);
        console.log("delete button pressed");
    }
    updateLine(){
        console.log("update button pressed");
    }
}