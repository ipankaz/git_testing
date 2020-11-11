let inpNewTask = $('#inpNewTask');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let ulTask = $('#ulTask');
let btnDelete = $('#btnDelete');
let btnSort = $('#btnSort');


// add button 

function additem() {
    
    let listItem = $('<li>' , {
        'class' : 'list-group-item',
        text : inpNewTask.val()    })

        ulTask.append(listItem)
        inpNewTask.val('');

        listItem.click(()=> {
            listItem.toggleClass('done')
        })
}

btnAdd.click(() =>{
    additem()  
    togglebuttons() 
  })
  
  inpNewTask.keypress((e) =>{
      if(e.which==13){
        additem()
        togglebuttons()

      }
  }
  
  )
  
//   delete button 

function deleteitem(){
$('#ulTask li.done').remove();
}

btnDelete.click(() => {
    deleteitem();
}
    
)

// clear bytton 

btnClear.click(() => {
    inpNewTask.val('')
    togglebuttons();
})

//sort button

btnSort.click(() => {
sortTasks();
})

function sortTasks()  {
$('#ulTask li.done').appendTo(ulTask);
}

function togglebuttons(){
    
        btnAdd.prop('disabled',inpNewTask.val()=='');
        btnClear.prop('disabled',inpNewTask.val()=='');
        btnSort.prop('disabled' , ulTask.children().length <2)
        btnDelete.prop('disabled' , ulTask.children().length <1)
    
}

inpNewTask.on( 'input' ,() => {
togglebuttons()
})



