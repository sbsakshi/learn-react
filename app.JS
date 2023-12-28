// const heading = React.createElement("h1",{id:"header",xyz:"abc"},"hello world from react")

// const root= ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

{/* <div id="parent">
    <div id="child">
        <h1>"i am h1 tag</h1>
    </div>
</div> 

react element (object) => HTML (browser understands)
*/}
import React from "react";
import ReactDOM from "react-dom/client"



const parent= React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
    "div",
    {id:"child"},
    [React.createElement("h1",{},"i am h1 tag"),
    React.createElement("h2",{},"i am h2 tag")]),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am h2 tag")])]
)
;

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)


//jsx
