# 15 Puzzle

This app generates a solveable 15-puzzle based off of a randomly selected image retrieved from the [Unsplash API](https://unsplash.com/developers)



# Technical Overview
The meat and potatoes of this project is a React app, based off of Create React App (CRA).  

In an effort to obscure the api key, a Node server is being used as a proxy for the api call to Unsplash. 

The following libraries are also used:

- [Axios](https://github.com/axios/axios)
- [Semantic Ui React](https://react.semantic-ui.com/)


# Getting Started

These instructions will get you a copy of the project up and running on your local machine, and you can get your puzzling on.


## Prerequisites

You will need a valid Unsplash API key.  You can [obtain that here](https://unsplash.com/developers).  


## Installing

Clone the repo and navigate into the folder:

```
cd 15puzzle
```

Install the dependencies for the project by running the following command from the project's root:

```
npm install
```

This will install all necessary dependencies.  

Create a `.env` file in `/server` and place your api key in there.   Your folder structure should look like this:

```
/15puzzle
 /client
 ...
 /server
 ...
 .env
```

```
# .env
UNSPLASH_API_KEY=<YOUR_API_KEY_HERE>
```

At this point, you should be ready to run!



## Development

From the project root, go ahead and start the app:

```
npm start
```



## Build

From the project root, go ahead and run 

```
npm run build-client
```

You should now have an updated `/build` folder in `/15puzzle/client/`



## Running a production build

From the project root, go ahead and run the following command which creates a client build, starts the back-end server and runs the client build.

```
npm run start-prod

```
# How does it work? 

## Initialization

### Populating the `<GameBoard>`

When a `<GameBoard>` component mounts, we 
* ping the Unsplash api for a random image
* persist the url of the received image in `<GameBoard>`'s state
* generate an array (to be used as tiles) containing integers [0...15] in a randomized order
  - we repeat this step until a set of tiles is generated that leads to a solveable game

 When a `<GameBoard>` component `render()`s, we 
* We `.map()` through `pieces` and create a `<GamePiece>` for each element
  - Each `<GamePiece>` is provided the coordinates (x,y) of where that piece will be positioned in the 4 x 4 square once the puzzle is solved

	- When a `<GamePiece>` is clicked, its location relative to the blacked out square is calculated and if it borders the blacked out square, it the two are swapped. 

	- We keep track of the number of inversions on the board at any given time.  An inversion is defined as tiles that are out of order when compared to the tiles when the puzzle is solved. 

```
Indices can be thought of as:

0  1  2  3
4  5  6  7
8  9  10 11
12 13 14 15

```

### Binding images to each `<GamePiece/>`
- Each `<GamePiece>` is provided (via props) the url of the retrieved image from Unsplash.  
- Every `<GamePiece>` uses this image as its `background-image`
- The `background-position` property is used to adjust the visible portion of the background image based on the `<GamePiece>`'s position on the 4x4 grid when the puzzle is solved

## Interaction

## Built With

* [Creact React App](https://github.com/facebook/create-react-app)

## Future Development Considerations

### Testing

- Create tests to ensure custom components such as `<GamePiece/>` render what they are supposed to, when they are supposed to
- Incorporate integration tests to ensure action creators, sagas and reducers are working together properly to update the store
- Incorporate e2e tests in the browser to test overall user experience


### Performance & Scalability
- Review current performance and number of times components are rendering unnecessarily, use `shouldComponentUpdate()` where helpful

### Refactoring

- Disable Redux DevTools for production build

# Authors

* **Barry Ross** 

# References

- [Setting up React/Node Project](https://www.codementor.io/kakarganpat/how-to-setup-react-and-node-js-in-a-project-koxwqbssl) - Very helpful tutorial regarding using node as a proxy in conjuction with React
- [3 Ways to Solve a 15 Puzzle](https://www.wikihow.com/Solve-a-15-Puzzle)
- [How to Check if a 15 Puzzle is Solveable](https://www.geeksforgeeks.org/check-instance-15-puzzle-solvable/)
- [JavaScript 15 Puzzle](https://codepen.io/declanwhelan/pen/rsntC)
- [Building a 15 Puzzle in Defold](https://www.defold.com/tutorials/15-puzzle/)
- [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)