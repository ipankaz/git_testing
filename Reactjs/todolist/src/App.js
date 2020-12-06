import React , {useState} from 'react'
import Listitem from './components/listitem'


function App(){
    const [input,setinput] = useState('');
    const [list,setList] =useState([])

    function inputEvent(event){
        
        setinput(event.target.value)
    }
   
    function addItem(){
        
        setList((oldArray)=>{
            return [...oldArray,input]
        })
        setinput('')
    }
    function deleteItem(id){
        setList((olditems)=>{
           return olditems.filter((value,index)=>{
                return index!==id
            })
        })
    }
    return(
<>
<div>
    <h1>ToDoList</h1>
    <br/>
    <input type="text" placeholder="Add New Item" onChange={inputEvent} value={input}></input>
    <button onClick={addItem}>+</button>
    <ol>
    { list.map((element,index)=>{
        return <Listitem key={index} id={index} text={element} onSelect={deleteItem}/>
    })}
    </ol>
</div>
</>
    )
}

export default App;