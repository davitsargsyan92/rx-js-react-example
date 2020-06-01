import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { useEffect , useState } from "react";
import todosService from "../services/todosService";


const useTodos = () => {

    const [ todos, setTodos ] = useState(todosService.todos.getValue());


  useEffect(() => {
    const todosObserver = todosService.todos.subscribe(setTodos);
    // const todosObserver = todosService.getTodos().subscribe(setTodos)
    return () => {
      todosObserver.unsebscribe();
    };
  }, []);


  return {
    todos,
    getTodos: todosService.getTodos,
  }
};

export default useTodos;
