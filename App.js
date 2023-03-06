import React from "react";
import ReactDOM from "react-dom/client";



const heading3 = React.createElement('h1',{}, "33333Hello WOgrld");
// const heading2 = React.createElement('h1',{}, "2222Hello WOrld");
// const heading = React.createElement('h1',{}, [heading2, heading3]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading3);