import { useState } from "react"


export default function Principal(){

  const [title, setTitle] = useState("7");
  const [tasks , setTask] = useState([])


  function handleChange(e){
    const value = e.target.value;

    setTitle(value);
  }

  function handleSubmit(e){
    e.preventDefault();

    const newTask ={
      id: crypto.randomUUID(),
      title: title,
      completed: false
    };

    const temp = [...tasks]
    temp.push(newTask)

    setTask(temp)

  }

  return(
    <div className="principal">

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="hola" value={title}
          onChange={handleChange}/>         
        <input 
          onClick={handleSubmit}
          type="submit" /> 
      </form>

      <div>
        {
          tasks.map( item => (
            <div key={item.id}>{item.title}</div>
          ))}
      </div>

      

        {title}

    </div> 

)}