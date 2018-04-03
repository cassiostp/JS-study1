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
            //Create headers for the table
            listHeaders.forEach(header => {
                let th = document.createElement("th");
                th.appendChild(document.createTextNode(header));
                table.appendChild(th);
            });
            //Create and fill lines/columns
            Object.values(list).forEach(obj => {
                let tr = document.createElement("tr");
                Object.values(obj).forEach(attribute => {
                    let td = document.createElement("td");
                    td.appendChild(document.createTextNode(attribute));
                    tr.appendChild(td);
                });
                //Create buttons for each line
                let tdDelete = document.createElement("td");
                let tdUpdate = document.createElement("td");
                tdDelete.appendChild(createButton('delete-btn', 'Delete'));
                tdUpdate.appendChild(createButton('update-btn', 'Edit'));
                tr.appendChild(tdDelete);
                tr.appendChild(tdUpdate);
                tbody.appendChild(tr);
            });
            //Create Add Book button
            let div = document.createElement("div");
            div.setAttribute('class', 'login');
            div.appendChild(createButton('add-btn', 'Add Book'));

            table.appendChild(tbody);
            element.appendChild(h1);
            element.appendChild(table);
            element.appendChild(div);
            this.createTableListeners();
        }
    }
    createTableListeners(){
        let updateBtns = document.querySelectorAll(".update-btn");
        let deleteBtns = document.querySelectorAll(".delete-btn");
        let addBtn = document.querySelector('.add-btn');
        updateBtns.forEach(btn => {
            btn.addEventListener("click", e => this.openModal(e, 'Edit Line'));
        });
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", e => this.deleteLine(e));
        });
        addBtn.addEventListener('click', e => this.openModal(e, 'Add Line'));
    }
    deleteLine(e){
        let list = this.list;
        let removeTarget = e.target.parentNode.parentNode;
        let removeTargetName = removeTarget.firstChild.textContent;
        this.list = list.filter(obj => {
            return obj.name !== removeTargetName;
        });
        removeTarget.style.opacity = '0';
        setTimeout(function(){removeTarget.parentNode.removeChild(removeTarget);}, 100);
        console.log(this.list);
    }
    updateLine(e){
        let list = this.list;
        let content = e.target.parentNode;
        content.appendChild(document.createTextNode('Updated'));
    }
    addLine(e){
        let list = this.list;
        let content = e.target.parentNode;
        content.appendChild(document.createTextNode('Added'));
    }
    createModalListeners(e){
        let targetBtn = e.target;
        let confirmBtn = document.querySelector('.confirm-btn');
        let close = document.querySelector('.close');

        if(targetBtn.className === 'add-btn'){
            confirmBtn.addEventListener('click', e => {
                this.addLine(e);
                closeModal(e);
            });
        } else if (targetBtn.className === 'update-btn') {
            confirmBtn.addEventListener('click', e => {
                this.updateLine(e);
                closeModal(e);
            });
        }
        
    
        close.addEventListener('click', e => closeModal(e));
    }
    openModal(e, title){
        createModal(title);
        this.createModalListeners(e);
    }
}