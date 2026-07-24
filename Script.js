// Live Clock

function updateClock() {

    const now = new Date();

    document.getElementById("time").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        now.toDateString();
}

setInterval(updateClock,1000);

updateClock();


// Add Task

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

const addTask = document.getElementById("addTask");

addTask.addEventListener("click",function(){

    if(taskInput.value==""){
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        taskInput.value +
        " <button class='delete-btn'>Delete</button>";

    taskList.appendChild(li);

    taskInput.value="";

    updateProgress();

});


// Delete Task

taskList.addEventListener("click",function(e){

    if(e.target.classList.contains("delete-btn")){

        e.target.parentElement.remove();

        updateProgress();

    }

});


// Complete Task

taskList.addEventListener("dblclick",function(e){

    if(e.target.tagName=="LI"){

        e.target.classList.toggle("completed");

        updateProgress();

    }

});


// Progress Bar

function updateProgress(){

    const total=document.querySelectorAll("#taskList li").length;

    const completed=document.querySelectorAll(".completed").length;

    let percent=0;

    if(total>0){

        percent=(completed/total)*100;

    }

    document.getElementById("progressFill").style.width=
        percent+"%";

    document.getElementById("progressText").innerHTML=
        Math.round(percent)+"% Completed";

}


// Dark Mode

const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});