const form = document.querySelector("#addTodo");
const input = document.querySelector("#todo");
const todoList = document.querySelector("#todoList")

const savedList = JSON.parse(localStorage.getItem('theList')) || [];
console.log(savedList);
for (let i = 0; i<savedList.length; i++) {
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "Completed";
    newTodo.innerText = savedList[i].taskName;
    newTodo.isDone = savedList[i].isDone ? true : false
    //newTodo.isDone = Boolean(savedList[i].isDone);
    if (newTodo.isDone){
        newTodo.style.textDecoration = 'line-through';
    }
    //newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
};

//const savedList = [];
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    //const removeBtn = document.createElement('button');
    //removeBtn.innerText = "Completed";
    newTodo.innerText = taskName.value;
    newTodo.isDone = false;
    //form.reset();
    form.reset(); 
    //newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);

    
    savedList.push({taskName:taskName, isDone: false});
    //console.log(savedList);
    localStorage.setItem("theList",JSON.stringify(savedList));
});

todoList.addEventListener('click',function(e){
    if (!e.target.isDone){
        e.target.style.textDecoration = 'line-through';
        e.target.isDone = true;
    } else{
        e.target.style.textDecoration = 'none';
        e.target.isDone = false;
    }
    for (let i = 0; i<savedList.length; i++){
        if (savedList[i].taskName === e.target.innerText){
            savedList[i].isDone = !savedList[i].isDone;
            localStorage.setItem("theList", JSON.stringify(savedList));
        }
    }
    //if (e.target.tagName === 'BUTTON'){
       // e.target.localStorage.removeItem("")
       // e.target.parentElement.remove();
});
