let newtask = document.getElementById('newtask');
let addtask = document.getElementById('addtask');
let todolist = document.getElementById('todolist');

addtask.onclick = function(){

    // add button 
    let li = document.createElement('li');
    let taskspan = document.createElement('span');
    taskspan.innerText = newtask.value;
    li.appendChild(taskspan);
    
    
//delete button
    let dltbtn = document.createElement('button');
    dltbtn.innerText = 'X';
    dltbtn.onclick = function(event){
        event.target.parentElement.remove();
    }

    // up button 

    let upbtn = document.createElement('button');
    upbtn.innerText= 'up';
    upbtn.onclick = function(event){
        event.target.parentElement.parentElement.insertBefore(event.target.parentElement , 
            event.target.parentElement.previousElementSibling);
    }

    // down button 

    let downbtn = document.createElement('button');
    downbtn.innerText= 'down';
    downbtn.onclick = function(event){
        event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling , 
            event.target.parentElement);
    }
    
    li.appendChild(dltbtn);
    todolist.appendChild(li);
    li.appendChild(upbtn);
    li.appendChild(downbtn);
}