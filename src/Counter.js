
import React, { useState } from 'react';

 function Counter() {
    const [count, setCount] = useState(0);
  return (
 
    <div className='container'>
       <p> Counter App  </p>
       <p> {count}  </p>

       <button className='btn-add' onClick={() => setCount(count + 1)}>
        +
       </button>
       <button className='btn-remove' onClick={() => setCount(count - 1 ||  count === 0 )}>
        -
       </button>
    </div>
  )
}
export default Counter;