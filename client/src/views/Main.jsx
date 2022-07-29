import React from 'react'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
import GridComponent from '../components/GridComponent'
import "../stlyes/mainStyle.css"


const Main = () => {
    const [masterGrid, setGrid] = useState([
        ["0","0","7","0","4","5","0","0","0"],
        ["0","0","0","7","0","8","4","2","0"],
        ["0","6","0","0","0","0","0","0","5"],
        ["7","0","3","0","1","4","6","9","2"],
        ["5","0","9","6","8","3","0","4","7"],
        ["1","0","6","2","0","7","0","0","0"],
        ["0","7","0","0","3","0","5","6","0"],
        ["0","3","2","0","0","0","0","1","4"],
        ["0","0","4","8","0","0","0","0","0"]
    ])
    const [ogGrid, setOG] = useState([
        ["0","0","7","0","4","5","0","0","0"],
        ["0","0","0","7","0","8","4","2","0"],
        ["0","6","0","0","0","0","0","0","5"],
        ["7","0","3","0","1","4","6","9","2"],
        ["5","0","9","6","8","3","0","4","7"],
        ["1","0","6","2","0","7","0","0","0"],
        ["0","7","0","0","3","0","5","6","0"],
        ["0","3","2","0","0","0","0","1","4"],
        ["0","0","4","8","0","0","0","0","0"]
    ])

    const [animate, setAnimate] = useState(false)
    const [solved, setSolved] = useState(false)
    const listOfGrids = useRef([])
    const [index, setIndex] = useState(0)

    const iterateList = () =>{
       setAnimate(!animate)
    } 

    useEffect(()=>{
        if(animate){
            // console.log(listOfGrids.current.length, listOfGrids.current[index])
            const iter = setTimeout(() => {
                setGrid(listOfGrids.current[index])
                if(index<listOfGrids.current.length-1){
                    setIndex(index+1)
                }
            },300)
            return ()=> clearTimeout(iter)

        }
    },[animate,index])
       
    const newGrid = () =>{
        const grid = [
            ["0","0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0","0"]
        ]
    
        let count = 36
    
        for(let i = 0; i < count; i++){
            let row = Math.floor(Math.random() * 9)
            let col = Math.floor(Math.random() * 9)
            let value = Math.floor(Math.random() * 9).toString()
            if(isValid(grid, value, row, col)){
                grid[row][col] = value.toString()
            }
        }

    setSolved(false)
    return grid
    }


    const solve = (grid) =>{
        const copyGrid = structuredClone(grid)
        //structuredClone makes a "deep copy" which means 

        let empty = findEmpty(copyGrid) 
        // finds the next empty cell in the grid going through each row and column
        // returns that as an indexes of where the empties are in an array ie [0,2]
        let row = empty[0]
        let col = empty[1]
        // sets the row and col appriately based off the array returned from find empty
        if(row === null){
            setSolved(true)
            return true
        }
        // null is returned only if it couldn't find any more empty squares on the grid. Meaning the sodoku should be solved.
        for(let guess = 1; guess < 10; guess++){
            // tries guessing between 1-9 to see if any of them are valid guesses. 

            if (isValid(copyGrid, guess, row, col)){
                copyGrid[row][col] = guess.toString()
                listOfGrids.current.push(copyGrid)
                // if a valid guess is found it takes the index at that row and column of the grid and assigns it to the value of guess
                if(solve(copyGrid)){
                    
                    return true
                }
            } 
        }

        copyGrid[row][col] = "0"
        
        listOfGrids.current.push(copyGrid)


        // if it could not find a valid guess it sets the index of the grid back to "0" which marks it as empty

        return false
    }

    // +++++++++++++++++ HELPER FUNCTIONS +++++++++++++++++++


    const findEmpty = (grid) =>{
        for(let r = 0; r < 9; r++){
            // loops through the row in the grid
            for(let c = 0; c < 9; c++){
     
                // loops through that rows values at for each column
               
                if(grid[r][c] === '0'){ 
                // if it finds and empty marked as "0", it will return the indexes of the empty cell to be used for guessing the correct value
                    return [r, c]
                }
            }
        }
        return [null, null] 
        // if it can't find any empty cells, it returns [null,null] to mark that the puzzle is completely filled out. 
    }

    const isValid = (grid, guess, row, col) =>{
        const rowVals = grid[row]
        if(rowVals.includes(guess.toString())){
        return false
        }
        // checks the guess to see if the values in the row inclued the value of the guess, if it does it returns false, it is a bad guess
        const colVals = []
        for(let i = 0; i < grid.length; i++){
            colVals.push(grid[i][col])
        }
        if(colVals.includes(guess.toString())){
            return false
        }
        // populates an array with all the values in a particular column, then checks if those values include the guess, returns false if it does

        const rowStart = Math.floor(row/3) * 3
        const colStart = Math.floor(col/3) * 3
        // calculates the box that the value at the row,col exist in. 
        
        for(let r = rowStart; r < rowStart + 3; r++){
            for(let c = colStart; c < colStart + 3; c++){
                // these two loops, loop through the columns and rows for the box we are checking for duplicate values
                if(grid[r][c] === guess.toString()){
                   
                    return false
                    // if it finds any duplicates in the box, it will return false. letting us know it is a bad guess.
                }
            }
        }
        return true
    }

    const updateGrid = (idx1, idx2, value) => {
        const copyGrid = [...masterGrid]
        if(ogGridCheck){
                copyGrid[idx1][idx2] = value
                setGrid(copyGrid)
        
        }
    }

    const ogGridCheck = (idx1, idx2) =>{
        if(ogGrid[idx1][idx2] === "0"){
            return true
        }
        return false
    }

    const newPuzzle = () => {
        const grid = newGrid()
        console.log("hello")
        setGrid(grid)
        setOG(grid)
    }

  return (
    <div>
        <GridComponent grid={masterGrid} newGrid ={updateGrid} ogCheck={ogGridCheck} isValid={isValid}/>
      {
        solved?
        <button className={"seeSolve-btn"}onClick={() => iterateList()}>See Solve</button>:
        <button className={"solve-btn"} onClick={() => solve(masterGrid)}>Solve!</button>

      }
    
    <button className={"new-puzzle"} onClick={()=> newPuzzle()}>New Puzzle!</button>
      <div>
        <h1 className='heading'>How to use:</h1>
        <p>After clicking the solve button, A button will appear to visualize the solve!</p>
        <p>The solving algorithm uses backtracking, you will see the computer back up when it finds a dead end.</p>
        <h1 className='heading'>How to Play: </h1>
        <p>Fill in the with the digits 1-9</p>
        <p>Digits may not repeat in any row, column or box</p>
        <p>Click a cell, and use the numbers on your keyboard to add a digit. Backspace to remove.</p>
      </div>
    </div>
  )
}

export default Main