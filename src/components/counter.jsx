
import React,{useState} from 'react'
import './counter.css'

function Counter() {
    const [val, setVal] = useState(0)
    function Increase(){
        setVal((prev) => {
            return prev+1
        })
    }
    
    function Decrease(){
        setVal((prev) => {
            return prev-1
        })
    }
    
    // let x = true
    // let y = false
    
    let x = false
    let y = true
    
    const [first, setfirst] = useState(true)

    function disappear(){
       setfirst(false)
       
    }

  return (
      
      <div>
      { y && <div className='cntMain'>
        
        <button onClick={Decrease}>Remove</button>
        <p className='cntval'>{val}</p>
        <button onClick={Increase}>Add</button>
       
    </div>}
        { x && <button onClick={disappear} className='magic'>Add to Cart</button>}
        </div>
  )
}

export default Counter