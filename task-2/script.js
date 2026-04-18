document.getElementById("btn").onclick = function () {
  alert("Task 2 Started 🚀");
};

/* FORM VALIDATION */
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name === "" || email === ""){
    document.getElementById("msg").innerText = "❌ All fields are required!";
  }
  else if(!email.includes("@")){
    document.getElementById("msg").innerText = "❌ Enter valid email!";
  }
  else {
    document.getElementById("msg").innerText = "✅ Form submitted successfully!";
  }
});

/* TO-DO LIST */
function addTask(){
  let input = document.getElementById("taskInput");

  if(input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  li.onclick = function(){
    li.remove();
  };

  document.getElementById("list").appendChild(li);
  input.value = "";
}