import React, { useState } from 'react'
import Button from './components/Button'
import Heading from './components/Heading'

let TaskId = 0
const App = () => {
  const [Task, setTask] = useState()
  const [TaskArr, setTaskArr] = useState([])
  const [Text, setText] = useState()


  function handleClick(e) {
    Task && setTaskArr([...TaskArr, { value: Task, id: TaskId++ }])
    let input = document.querySelector('#txt-input')
    input.value = ""
    setTask("")
  }

  function handleChecked(e) {
    // e.target.nextSibling.style.textDecoration = (e.target.checked ? 'line-through' : 'none')
    if (e.target.checked) {
      e.target.nextSibling.classList.add('line-through')
    } else {
      e.target.nextSibling.classList.remove('line-through')
    }
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
      <div className="mx-auto w-8/12 m-10">
        <Heading >TODO - Learn in Public</Heading>

        <div className="flex w-full gap-5 justify-between flex-col md:flex-row ">
          <input id='txt-input' className='bg-indigo-700 focus:bg-indigo-600 outline-none text-slate-50 w-full ring-1 rounded-md py-2 px-4 text-xl' placeholder='Enter Task' type="text" onChange={handleOnChange} onKeyDown={(e) => { e.key === "Enter" && handleClick() }} />
          <div className=" flex  w-full gap-4">
            <Button text = "Add" onclick={handleClick}/>
            <Button text="Clear All" onclick={clearAll}/>
          </div>
        </div>

        <ul className='my-10'>
          {
            TaskArr.map(Task => {
              return <div className='my-1 text-xl bg-indigo-800 hover:bg-indigo-700 pl-4 rounded-md flex items-center' onClick={handleChecked} key={"task" + Task.id} >
                <div className='text-slate-50 select-none '>{Task.id + 1}</div>
                <input className='accent-fuchsia-400 scale-150  mx-4 ' type="checkbox" id={"task" + Task.id} onClick={handleChecked} />
                <label className='py-4 select-none decoration-2 decoration-fuchsia-600 text-slate-50  inline-block w-full' id={"lbl" + Task.id} htmlFor={"task" + Task.id}>{Task.value}</label>
                <button className='mx-5 p-2 ' onClick={(e) => {
                  console.log(e.target.parentNode.parentNode);
                  e.target.parentElement.remove()
                  
                }}><svg className='stroke-red-500 w-6 h-6 pointer-events-none' fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            })
          }
        </ul>


      </div>
    </>
  )
}

export default App