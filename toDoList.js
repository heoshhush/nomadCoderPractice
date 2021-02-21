const toDoForm = document.querySelector('.toDoForm'),
      input = document.querySelector('input'),
      toDoList = document.querySelector('.toDoList');

let temp = [];

function saveToDo(userInput){
    localStorage.setItem('userToDo',JSON.stringify(userInput))
}


function paintToDo(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');

    
    span.innerText = text;
    delBtn.innerText = '❌';
    
    li.appendChild(delBtn);
    li.appendChild(span);

    toDoList.appendChild(li);
    
    const toDoObj = {
        text : text,
        id : temp.length
    }
    
    temp.push(toDoObj);
    saveToDo(temp);
    
    
    
    
}

function handleSubmit(event){
    event.preventDefault();
    const userInput = input.value;
    paintToDo(userInput);
    
    
    
}



function loadToDo(){
    toDoForm.addEventListener('submit',handleSubmit)
    const userValue = localStorage.getItem('userToDo');
    if(userValue !== null){
        const parsedUserValue = JSON.parse(userValue);
        parsedUserValue.forEach((toDo) => paintToDo(toDo.text))
    }
}


/*
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    
    parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
    })
                       
    }
*/
loadToDo();






