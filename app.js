// create variables for each of the main elements
// stop default behavior of event listener on form
// append a new li with the todo to the UL
// mark a todo as completed (toggle mark through class with JS on click)
// remove todo when trash can is clicked



const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");



// load page with saved local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
for(let task of tasks) {
    let newLi = document.createElement("li");
    newLi.innerHTML = `${task}<span class="delete"><button>&#x1F5D1;</button></span>`;
    ul.append(newLi);
}



// stop default behavior of event listener on form
// append a new li with the todo to the UL
// get form data

form.addEventListener("submit", function(e){
    e.preventDefault();
    let newTask = input.value;
    let newLi = document.createElement("li");
    newLi.innerHTML = `${newTask}<span class="delete"><button>&#x1F5D1;</button></span>`
    ul.append(newLi);
    input.value = '';

        // Save the new task to localStorage
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
});











// mark a todo as completed (toggle mark through class with JS on click)
ul.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});


// remove todo when trash can is clicked
ul.addEventListener("click", function(e) {
    if (e.target.parentElement.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
        // remove item from local storage
        localStorage.removeItem('tasks',`$(e.value)`)
    }
});
// I need to reveiw 43-47 it took a lot of googling and confused me some



// HAD TO DELETE BELOW TO MAKE THESE APPLY TO THE NEWLY CREATED TASKS

// const lis = document.querySelectorAll("li");
// for(let li of lis) {
//     li.addEventListener("click", function() {
//         li.classList.toggle("completed");
//     });
// };


// // remove todo when trash can is clicked
// const trashes = document.querySelectorAll("span");
// for(let trash of trashes){ 
//     trash.addEventListener("click", function(){
//         trash.parentElement.remove();
//     });
// };
