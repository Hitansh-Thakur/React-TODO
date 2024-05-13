import React, { useState } from 'react'

let TaskId = 0
const App = () => {
  const [Task, setTask] = useState()
  const [TaskArr, setTaskArr] = useState([])
  const [Text, setText] = useState()


  function handleClick(e) {
    let input = document.querySelector('.txt-input')
    Task && setTaskArr([...TaskArr, { value: Task, id: TaskId++ }])
   }

  function handleOnChange(e) {
    setText(Text + e.target.value)
    setTask(e.target.value)
  }

  function clearAll() {
    setTaskArr([])
    TaskId = 0 
  }

  return (
    <>
      <input id='txt-input' type="text" onChange={handleOnChange} />
      <button onClick={handleClick}>Add</button>
      <button onClick={clearAll}>Clear All</button>

      <ul>
        {
          TaskArr.map(Task => {
            return <div key={"task" + Task.id} >
              {Task.id + 1} <input type="checkbox" id={"task" + Task.id}  onClick={(e)=>{                
              // console.log(e.target.nextSibling);
                  e.target.nextSibling.style.textDecoration = (e.target.checked?'line-through':'none')
              }}/><label id={"lbl" + Task.id} htmlFor={"task"+Task.id}>{Task.value}</label>
            </div>
          })
        }
      </ul>


    </>
  )
}

export default App