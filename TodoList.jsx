import React from 'react';
import './TodoList.css';

const TodoList = (props) => {

    
    return (
    <>
    <div className='dis'>
    <li>{props.text}</li>
    <i className="fa fa-close" onClick={()=>{
        props.onSelect(props.id);
    }}></i>
    </div>
   </>
    );
}

export default TodoList;