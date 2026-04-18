/* FORM VALIDATION */
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name === "" || email === ""){
    msg.innerText = "❌ Fill all fields";
  } else if(!email.includes("@")){
    msg.innerText = "❌ Invalid email";
  } else {
    msg.innerText = "✅ Message sent!";
  }
});

/* TODO WITH LOCAL STORAGE */
function addTask(){
  let task = document.getElementById("taskInput").value;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

function showTasks(){
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let list = document.getElementById("list");

  list.innerHTML = "";

  tasks.forEach(t => {
    let li = document.createElement("li");
    li.innerText = t;
    list.appendChild(li);
  });
}

showTasks();