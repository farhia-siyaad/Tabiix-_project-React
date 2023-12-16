import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] =  useState(0)
    const incrementCount = () => {
        setCount(count + 1)
        
    }
    const decrementCount = () => {
        count ==0 ? setCount(0) : setCount(count - 1)
    }
    const resetCount = () => {
        setCount(0)
    }
  return (
    <div style={{marginTop:"200px", marginLeft:"500px", justifyContent:"center", alignItems:"center",color:count==10? "red": ""}}>
        <h1 style={{marginLeft:"40px", marginBottom:"10px", fontSize:"50px"}}>{count}</h1>
        <button type='button' style={{
            backgroundColor: 'blue',
            padding:10,
            margin:10,
            // backgroundColor: 'black',
            color:'#fff',
            fontSize:20
        }}
        onClick={resetCount}>Reset</button>
        <button type='button' style={{
            backgroundColor:'green',
            padding:10,
            margin:10,
            fontSize:20
            
        }}
        onClick={incrementCount}>+</button>
        <button type='button' style={{
            backgroundColor:'red',
            borderRadius:10,
            
            padding:10,
            margin:10,
            fontSize:20
        }}
        onClick={decrementCount}>-</button>


            

    </div>
  )
}

export default Counter;