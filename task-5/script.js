/* TODO */
function addTask(){
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if(task === "") return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  showTasks();
}

function showTasks(){
  let list = document.getElementById("list");
  list.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((t, i) => {
    let li = document.createElement("li");
    li.innerText = t;
    li.onclick = () => deleteTask(i);
    list.appendChild(li);
  });
}

function deleteTask(index){
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index,1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

showTasks();

/* API */
function getJoke(){
  fetch("https://official-joke-api.appspot.com/random_joke")
  .then(res => res.json())
  .then(data => {
    document.getElementById("joke").innerText =
      data.setup + " - " + data.punchline;
  });
}
let images = [
  "https://picsum.photos/500/300?1",
  "https://picsum.photos/500/300?2",
  "https://picsum.photos/500/300?3",
  "https://picsum.photos/500/300?4"
];

let i = 0;

function nextImage(){
  i = (i + 1) % images.length;
  document.getElementById("slider").src = images[i];
}

function prevImage(){
  i = (i - 1 + images.length) % images.length;
  document.getElementById("slider").src = images[i];
}