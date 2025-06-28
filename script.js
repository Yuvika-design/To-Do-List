function addTask() {
    const inputField = document.getElementById("inputTask");
    const taskList = document.getElementById("taskList");

    const taskText = inputField.value.trim(); //for removing spaces

   
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }// for checking if the input is empty

    
    const newTask = document.createElement("li"); 
    newTask.className = "task"; 
    newTask.style.cursor = "pointer"; // Change cursor to pointer for better UX
    newTask.textContent = taskText; 

   
    newTask.addEventListener("click", () => {
        newTask.classList.toggle("done");
    }); // Toggle the 'done' class on click
    
    taskList.appendChild(newTask);
    inputField.value = "";
    inputField.focus(); // Focus back on the input field after adding a task
    clearTasks(newTask); 
}

function clearTasks(newTask) {
    const dltbutton=document.createElement("button");
    dltbutton.className="dltbtn";
    dltbutton.textContent="Complete";
    newTask.appendChild(dltbutton);
    dltbutton.addEventListener("click", () => {
        newTask.remove(); // Remove the task when the button is clicked 
    });
}
