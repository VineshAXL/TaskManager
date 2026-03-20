let addbtn = document.getElementById("submit_btn");

function addtask() {
    // let task = document.getElementById("task").value;
    // let date = document.getElementById("date").value;
    // console.log(task);
    // alert("hfsd");  

    valuenotempty();
}
function valuenotempty() {

    let taskInput = document.getElementById("task");
    let task = taskInput.value;

    let dateInput = document.getElementById("datetxt");
    let priority_high = document.getElementById("priority-high");
    let priority_low = document.getElementById("priority-low");
    let table = document.getElementById("table");



    if (dateInput.value && task !== "") {
        let row = document.createElement("tr");

        // status
        let status = document.createElement("td");
        status.textContent = "Active";
        status.style.fontWeight = "bold";
        // table.appendChild(status);

        // task
        let taskcell = document.createElement("td");
        taskcell.textContent = task;
        taskcell.style.fontWeight = "bold";
        // table.appendChild(taskcell);

        // priority
        let priority = document.createElement("td");
        if (priority_high.checked) {
            priority.textContent = "High Priority";
            priority.style.color = "red";
            // table.appendChild(priority);
        } else {
            priority.textContent = "Low Priority";
            priority.style.color = "green"
            // table.appendChild(priority);
        }

        // date
        let task_date = document.createElement("td");
        task_date.textContent = dateInput.value;
        // table.appendChild(task_date);
        // dateInput.textContent = "";

        // action
        let editButton = document.createElement("button");

        // edit
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        editButton.addEventListener("click", () => {
            taskcell.setAttribute("contenteditable", "true");
            taskcell.focus();
        });

        let completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completeButton.addEventListener("click", () => {
            status.textContent = "Completed";
            taskcell.style.textDecoration = "line-through";
            taskcell.style.color = "green";
            
        });

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener("click", () => {
            row.remove();
        });

        let actions = document.createElement("td");
        actions.append(editButton,completeButton,deleteButton);

       //  append all to row
       taskcell.classList.add("completed");
        row.append(status, taskcell, priority, task_date, actions);

        //  append row to table
        table.appendChild(row);

        //  clear inputs
        taskInput.value = "";
        dateInput.value = "";
        priority_high.checked = false;
        priority_low.checked = false;
        
        
    
    
    } else {
        alert("Enter Task Must");
    }
}


