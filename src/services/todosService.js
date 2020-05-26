import { BehaviorSubject } from 'rxjs';


class TodosService {
    todos = new BehaviorSubject({
        isLoading : false,
        data : []
    });

    getTodos = async () =>  {
        this.todos.next({isLoading: true, data: []});
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        this.todos.next({
            isLoading: false,
            data: result
        })
    }
}

const todosService = new TodosService();

export default todosService;
