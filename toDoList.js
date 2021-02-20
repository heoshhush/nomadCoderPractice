const toDoForm = document.querySelector('.toDoForm'),
      input = document.querySelector('input'),
      toDoList = document.querySelector('.toDoList');


function paintToDo(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    
    span.innerText = text;
    delBtn.innerText = '❌';
    
    li.appendChild(delBtn);
    li.appendChild(span);

    toDoList.appendChild(li);
    
    
}




function handleSubmit(event){
    event.preventDefault();
    const userInput = input.value;
    paintToDo(userInput);
}



toDoForm.addEventListener('submit',handleSubmit)
