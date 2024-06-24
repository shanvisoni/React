import React from 'react';

const Header=(props)=>{
    return(
        
           <h1 className="todo-header text-2xl mt-4 text-center "> <u> {props.AppName}</u> </h1> 
  
    )
}

export default Header;