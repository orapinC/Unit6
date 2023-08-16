const form = document.querySelector("#addTodo");
//const input = document.querySelector("#todo");
const todoList = document.querySelector("#todoList")

const savedList = JSON.parse(localStorage.getItem('theList')) || [];
//console.log(savedList);
for (let i = 0; i<savedList.length; i++) {
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "Completed";
    newTodo.innerText = savedList[i].taskName;
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
};

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "Completed";
    newTodo.innerText = taskName.value;
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);

    savedList.push({taskName:taskName.value});
    localStorage.setItem("theList",JSON.stringify(savedList));
});

todoList.addEventListener('click',function(e){
    if (e.target.tagName === 'BUTTON'){
        const arrToSave = [];
       for ( let saved of savedList){
        //console.log(saved.taskName.value);
        // console#1
        console.log(e.target.parentElement.innerText);
        //console.log(saved.taskName);
        //console.log(saved);
        let savedCompleted = saved.taskName + 'Completed';
        //console.log(savedCompleted);
        if (savedCompleted === e.target.parentElement.innerText){
            e.target.parentElement.remove();
            //console #2
            console.log(arrToSave);
            //console.log(saved);
            //localStorage.removeItem("taskName");
            //console.log(saved);
            //localStorage.setItem("theList",JSON.stringify(savedList));
        } else {
            arrToSave.push({taskName:saved.taskName});
            //console#3
            console.log(arrToSave);
        };
       };
       // local not working here, but arrToSave is correct
        console.log(arrToSave);
        localStorage.setItem('savedList',JSON.stringify(arrToSave));
       //e.target.parentElement.remove();
    };
});

