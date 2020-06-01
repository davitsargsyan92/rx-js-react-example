import React, { useEffect, useLayoutEffect , useState } from 'react';
import useTodos from "./useTodos/useTodos";
import Component from "./component";
import { Observable , range } from "rxjs";


// observable.subscribe(data => console.log(data, 'first'))
// observable.subscribe(data => console.log(data, 'second'))

const App = () => {

const { todos  } = useTodos();

console.log(todos , 'todos-app')

useEffect(() => {

}, []);





  return(
    <div >
      <Component/>
    </div>
  )
}

export default App;
