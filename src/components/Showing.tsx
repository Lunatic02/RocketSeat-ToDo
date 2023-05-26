import style from './Showing.module.css'
import { Trash } from 'phosphor-react'

interface Showing{
  tarefa: string,
  tarefaDelete: (string: string)=>string,
  tarefaConcluded: boolean
}


export function Showing({tarefa, tarefaDelete, tarefaConcluded}: Showing){
  
  
  function handleTarefaDelete(){
    tarefaDelete(tarefa)
  }

  function handleTarefaConcluded(){
    const checkbox = document.querySelector('input[type=checkbox]')
    

    console.log(checkbox!.value)
    if(checkbox.value === 'on'){
      tarefaConcluded(true)
    }
    else{
    tarefaConcluded(false)
    }
  }

 
 
  
  return(
    <>
       <div className={style.tarefaContainer}>
          <div className={style.tarefasItem}>
            <div onClick={handleTarefaConcluded} ><input type="checkbox"/></div>
            <div className={style.texto}>{tarefa}</div>
            <button onClick={handleTarefaDelete}><Trash /></button>
          </div>
        </div>
    </>
  )
}

