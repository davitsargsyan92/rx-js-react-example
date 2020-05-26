import React, { useEffect, useLayoutEffect , useState } from 'react';
import useTodos from "./useTodos/useTodos";
import Component from "./component";






// observable.subscribe(data => console.log(data, 'first'))
// observable.subscribe(data => console.log(data, 'second'))

const App = () => {

const {todos , getTodos} = useTodos();

useEffect(() => {
  getTodos()
}, [])


  console.log(todos , 'todos')
  return(
    <div >
      <Component/>
    </div>
  )
}

export default App;
