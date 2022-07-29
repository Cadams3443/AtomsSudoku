# Welcome to Atom's Sudoku

This project was created with [Create React App](https://github.com/facebook/create-react-app).

# Atom's Sudoku's Mission

This project started with the idea that Sudoku solving algorithms would be a great visualization tool for backtracking algorithms.
Once the visualizer was complete, the passion I have for sudoku took over and I set out to make a great sudoku app. 

The expectation is that it will be full of the feature's you'd expect from a modern sudoku app. 
The features are still a work in progress and listed down below I have many more features I want to add in future updates.



## How to use (directly from React's documentation):

Inside the client folder you can run the following scripts:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Future features (for now...)
*Pencil Marks* 
- Pencil Marks for noting candidates for digits
- Choosing whether you want to pencil mark the corners or the center of a cell, for more accuracy.
- Being able to overwrite your pencil marks with a true digit, undoing that move and the previous pencil marks being there. 

*Misc*
- When a digit given conflicts with the digits on the board, it highlights both the digit the player gave, and the conflict

- Ability to use arrow keys to move around the grid after selecting a cell with your mouse.
- Ability to input digits/pencil marks in multiple cells at a time.  
