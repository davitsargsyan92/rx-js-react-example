import React , {memo} from 'react';
import useTodos from "./useTodos/useTodos";

const Component = () => {

    const { todos } = useTodos();

    console.log(todos , 'component')
    return (
        <div>


        </div>
    )
};

export default memo(Component , (prevProps , nextProps)=> {
    console.log(prevProps);
    console.log(nextProps);

    return true
});
