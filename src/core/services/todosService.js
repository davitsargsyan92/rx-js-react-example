import { BehaviorSubject , of  } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import FromFetchService from "../global/fromFetchService/fromFetchService";


const pendingSetter = data => ({
    isLoading: true,
    data: data
});

const doneSetter = data => ({
    isLoading: false,
    data
});

class TodosService {

    todos = new BehaviorSubject(doneSetter([]));

    getTodos =  () =>  {
        this.todos.next(pendingSetter([]));
        FromFetchService.get('todos').pipe(
            catchError(error =>  of(error))
        ).subscribe(async data => this.todos.next(doneSetter(await data.json())))
    }

}

const todosService = new TodosService();

export default todosService;
