import { PlusCircle } from "phosphor-react";
import style from './Form.module.css'
import { Showing } from "./Showing";
import { SetStateAction, useState } from "react";

export function Form(){
  const [tarefas, setTarefas] = useState<Array<string>>([]);
  const [newTarefa, setNewTarefa] = useState('')
  const [created, setCreated] = useState(0)
  const [concluded, setConcluded] = useState(0)

  function tarefaDelete(commentToDelete : string) {
    const commentsWithoutTheDeletedOne = tarefas.filter((tarefa) => {
      return tarefa !== commentToDelete;
    });
    setCreated(created-1)
    setTarefas(commentsWithoutTheDeletedOne);
  }

  function tarefaConcluded(checkbox: boolean){
    if(checkbox===true){
      setConcluded(concluded + 1)
    } else{
      setConcluded(concluded - 1)
    }
  }


  function handleChange(e: { target: { value: SetStateAction<string>; }; }){
    setNewTarefa(e.target.value)
  }
  function handleSubmit(e: { preventDefault: () => void; }){
    e.preventDefault()
    setTarefas([...tarefas, newTarefa])
    setCreated(tarefas.length + 1)
  }

  return(
    <>
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.input} type="text" value={newTarefa} onChange={handleChange}/>
      <button className={style.button}>
        <div><b>Criar</b> <PlusCircle/></div>
      </button>
    </form>
    </div>
    <div>
    <main className={style.containerMain}>
       <header className={style.headerInfo}>

        <p className={style.created}>
          <b>Tarefas criadas</b> 
          <span>{created}</span>
        </p>

        <p className={style.concluded}>
          <b>Concluídas</b>
          <span>{concluded}/{created}</span>
        </p>
       </header>
       <div>

       </div>
      </main>
    {tarefas.map(tarefa=>{
      return <Showing tarefaDelete={tarefaDelete} tarefaConcluded={tarefaConcluded} tarefa={tarefa} key={tarefa} created={undefined}/>
    })}
    
    </div>
    
    </>
  )
}

