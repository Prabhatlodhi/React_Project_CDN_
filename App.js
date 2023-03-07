import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
  return <h1>Hello world from heading top</h1>;
};

useMycustonhhok = ()=>{

}

const HeaderComponent = () => {
  return (
    <div>
      {/* {
inside the curly braces we can write any piece of JS Code

            heading ()

            this is one of the way we can use a REACT component to display
            this is working because react components is functionat the end of the day

        } */}
      <Heading />
      {/* another way of doing the same is using the name of the component and wrap inside the <> bracket  */}
      <h1>Hello world</h1>
    </div>
  );
};

// const heading3 = React.createElement('h1',{key:"2055"}, "33333Hello WOgrld");
// const heading2 = React.createElement('h1',{key:"2015"}, "2222Hello WOrld");
// const heading = React.createElement('div',{}, [heading2, heading3]);

// const heading = <h1>Hello world</h1>// this is a react element

// console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
