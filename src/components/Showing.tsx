import { useState } from 'react';
import style from './Showing.module.css'
import { Trash } from 'phosphor-react'

interface Showing{
  tarefa: string,
  tarefaDelete: (string: string)=>string,
  tarefaConcluded: boolean
}


export function Showing({tarefa, tarefaDelete, tarefaConcluded}: Showing){
  
  const [isChecked, setIsChecked] = useState(false);


  function handleTarefaDelete(){
    tarefaDelete(tarefa)
  }

  function handleTarefaConcluded(){
    const checkbox = document.querySelector('input[type=checkbox]')
    setIsChecked(!isChecked);
    let checagem;
    checagem = !isChecked
    tarefaConcluded(checagem)
  }

 
 
  
  return(
    <>
       <div className={style.tarefaContainer}>
          <div className={style.tarefasItem}>
            <div onClick={handleTarefaConcluded} ><input checked={isChecked}
          onChange={handleTarefaConcluded} type="checkbox"/></div>
            <div className={style.texto}>{tarefa}</div>
            
            <button onClick={handleTarefaDelete}><Trash /></button>
          </div>
        </div>
    </>
  )
}

