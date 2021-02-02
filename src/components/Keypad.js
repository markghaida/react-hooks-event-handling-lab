// Code Keypad Component Here
import React from 'react'

function Keypad(){
    function keytype(){
       console.log("Entering password...")
    }
    
    
   return (
     <input type="password" onChange={keytype}/>
   )
}
export default Keypad