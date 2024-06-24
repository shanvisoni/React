import React from 'react';

const Compo=(props)=>{
    
    
     return(
    
       <li className='todo-item'>
       <span>
        {props.completed ? <></> : <input type="checkbox" />}
           <span className='todo-item-text'>{props.item}</span>
           </span>
            <p className=''>...</p>
        </li>
       
 


  );
    
};

export default Compo;