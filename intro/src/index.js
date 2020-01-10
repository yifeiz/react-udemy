// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

function getButtonText(){
    return 'Click on me!';
}

// Older Version
// const App = function(){
//     return <div> Hi there! </div>;
// }

// Using Arrow Function
const App = () => {
    const buttonText = {text: 'ClickMe'}; 
    const styling = {backgroundColor: 'blue', color: 'white', border: '1px solid red'};

    return <div>
    <label className = "label" htmlFor = "name"> Enter name: </label>
    <input id = "name" type = "text" />
    <button style = {styling} > 
    {/* inline styling */}
    {/* <button style = {{ backgroundColor:'blue', color: 'white', border: '1px solid red' }} >  */}
        
        {buttonText.text}
        {/* Cannot show Javascript object as an element; so putting buttonText above would break */}

    </button>

    <button>
        {/* can reference to either var declared in function, or also other functions */}
        {getButtonText()}
    </button>
    
  </div>
}

// You should look at console to look for invalid attribute names

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// Take the react component and show it on the screen