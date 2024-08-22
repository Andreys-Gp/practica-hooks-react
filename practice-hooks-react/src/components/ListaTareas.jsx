import { useForm } from "../hooks/useForm";
import { useReducer, useState } from "react";

const initialState = [
  {
    id: new Date().getDate(),
    tarea: "Explicar Reducer",
    finalizada: false,
  },
];

/* const editarTarea = {
  type: "[TAREAS] Editar Tarea",
};
const elminarTarea = {
  type: "[TAREAS] Elminar Tarea",
};
const borrarTarea = {
  type: "[TAREAS] Borrar Tarea",
};
 */

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];

    case "[TAREAS] Finalizar Tarea":
      return state.map(tarea=>{
        if(tarea.id===action.payload){
          return{
            ...tarea,
            finalizada:!tarea.finalizada 
          }
        } return tarea
      })

    case "[TAREAS] Elminar Tarea":
      return state.filter(tarea=>tarea.id !== action.payload)

    case "[TAREAS] Borrar Tareas":
      /* console.log("Borrar Todo") */
      return []

    default:
      return state
  }
};

/* console.log(tareaReducer(initialState, agregarTarea));
 */



export const ListaTareas = () => {

  const [tareasState, dispatch] = useReducer(tareaReducer, initialState)

   const{tarea,formState,onInputChange}=useForm({tarea:''})

   const agregarTarea=(event)=>{
    event.preventDefault()

    if(formState.tarea=='')return

    console.log(formState)

    const tarea={
      id:new Date().getTime(),
      tarea:formState.tarea,
      finalizada: false
    }
    
    const action={
      type: "[TAREAS] Agregar Tarea",
      payload:tarea
    }

    dispatch(action)
  
  }

  const marcarFinalizada=({id})=>{
    const action={
      type: "[TAREAS] Finalizar Tarea",
      payload:id
    }
    dispatch(action)
  }

  const eliminarTarea=({id})=>{
    const action={
      type:"[TAREAS] Elminar Tarea",
      payload:id
    }
    dispatch(action)
  }

  const Reset=()=>{
    const action={
      type:"[TAREAS] Borrar Tareas",
      payload:""
    }
    dispatch(action)
  }

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="agregar tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </div>
        <button 
        type="submit"
        className="btn btn-primary">
          Submit
        </button>

        <button 
        className="btn btn-danger"
        onClick={Reset}
        type="button" >
          Reset
        </button>

      </form>
      <hr />
      <ul className="list-group">
    {
      tareasState.map(item=>{
        return(
          <li className="list-group-item d-flex justify-content-between" key={item.id} >
          <span>{item.tarea}</span>  
          <div>
          <input  
            type="checkbox"
            value={item.finalizada} 
            onChange={()=>marcarFinalizada(item)}
            ></input>
             <button 
             className="btn btn-primary"
              type="button"
              onClick={()=>eliminarTarea(item)}
             >Borrar</button>
          </div>
            
          </li>
          
        )
      })
    }
      </ul>

    </>
  );
};
