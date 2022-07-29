import React from 'react'
import { useState } from 'react'
import "../stlyes/cellStyle.css"
const CellComponent = (props) => {
  const index = props.index%3
  const rowIndex = props.rowIndex%3
  const [selected, setSelected] = useState(false)
  const [red, setRed] = useState("")


  document.onkeydown = (e) =>{
    let value = e.key
    if(selected){
      if(value === "Backspace"){
        updateGrid("0")
        setRed("")
      }else{
        if(/^[0-9]*$/.test(value)){
          if(!isValid(value)){
            setRed("text-red")
          }else{
            setRed("")
          }
          updateGrid(value)
          setSelected(!selected)

        }
      }
      
    }
  }

  const updateGrid = (value) => {
    props.newGrid(props.rowIndex, props.index, value)
  
  }

  const checkSelected = () =>{
    if(selected){
      return "selected"
    }else{
      return ""
    }
  }

  const ogGridCheck = () =>{
    if(props.ogCheck(props.rowIndex, props.index)){
      return "text-blue"
    }
   return ""
  }

  const isValid = (value) =>{
    return props.isValid(value, props.rowIndex, props.index)
  }



  return (
    <div>
    {
    props.cellData === "0"?
    <div  className={`cell b-${rowIndex}${index} ${checkSelected()} ${ogGridCheck()} ${red} ` } onClick={()=>setSelected(!selected)}></div>:
    <div className={`cell b-${rowIndex}${index} ${checkSelected()} ${ogGridCheck()} ${red} ` } onClick={()=>setSelected(!selected)} >{props.cellData}</div>
    
    }
    
    </div>
  )
}

export default CellComponent