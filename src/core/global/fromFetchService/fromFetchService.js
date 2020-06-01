import { fromFetch } from 'rxjs/fetch';

const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};


class FromFetchService {
    static #DOMAIN = 'https://jsonplaceholder.typicode.com';
    static TOKEN = '';

    static get(url){
        return this.request(url , API_METHODS.GET)
    }

    static post(){

    }

    static put(){

    }

    static delete(){

    }

    static request(url , method){


        const path = `${this.#DOMAIN}/${url}`;
        return fromFetch(path)
    }

}

export default FromFetchService;
