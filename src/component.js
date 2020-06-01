import React, {memo, useEffect} from 'react';
import useTodos from "./hooks/useTodos/useTodos";

const Component = () => {

    const { todos , getTodos} = useTodos();


    console.log(todos , 'todos-component')

    useEffect(() => {
        getTodos();
    } , [])


    return (
        <div>


        </div>
    )
};

export default memo(Component);
