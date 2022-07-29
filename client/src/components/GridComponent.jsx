import React from 'react'
import CellComponent from './CellComponent'
import "../stlyes/gridStyle.css"


const GridComponent = (props) => {


  const updateGrid = (idx1, idx2, value) =>{
    props.newGrid(idx1,idx2,value)
  }

  const ogGridCheck = (idx1, idx2) => {
    if(props.ogCheck(idx1, idx2)){
      return true
    }
  }

  const isValid = (value, row, col) =>{
    if(props.isValid(props.grid, value, row, col)){
      return true
    }

  }
  
  return (
    <div className='play-area'>
    <div className='grid'>
        {props.grid?
          <div>
            {
              props.grid.map((row,idx) => 
              <div className='row' key={idx}>
                      {
                        row.map((cell,i) =>
                        <div key={i}>
                            <CellComponent cellData={cell} index={i} rowIndex={idx} newGrid={updateGrid} ogCheck={ogGridCheck} isValid={isValid}/>
                          </div>
                          )
                        }
                  </div>
                  )    
                }
          </div>:<div></div>
              }
       
    </div>
  </div>
  )
}

export default GridComponent