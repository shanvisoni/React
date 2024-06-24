import React, {useState} from 'react';

const counter=()=>{
    const [count, setCount] = useState(5);
    // const [Value, setValue] = useState(count);
  

    return(
         <div>
        <p>Count Component - {count}</p>
        <h6 className='mt-2'>Number is - {count %2 ===0 ? "Even" :"Odd"} </h6>
        <button  onClick={() =>{count>1 ? setCount(count-1) : {count}} } className='border-2 px-1 bg-gray-100 rounded shadow-md mr-1'>Decrement</button>
        <button  onClick={() => {count<20 ? setCount(count+1) : {count}} } className='border-2 px-1 bg-gray-100 rounded shadow-md mt-2'>Increment</button>
    </div>

    )

}

export default counter;