const heading=React.createElement("h1",{id:"h1"},"Hii Guys naan ungal Manoranjan....");
 
const root=ReactDOM.createRoot(document.getElementById("root"));
 
root.render(heading);


const parent=React.createElement(
    "div",
    {id:"parent"},
   [
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"h2"},"Welcome to the great javascript class..."),
        React.createElement("h2",{id:"h3"},"Welcome to the great javascript class in...") 
        ]
    ),
    React.createElement("div",{id:"child1"},
        [React.createElement("h1",{id:"h2"},"Welcome to the great javascript class..."),
        React.createElement("h2",{id:"h3"},"Welcome to the great javascript class in...") 
        ]
    )
   ]
);


const root2=ReactDOM.createRoot(document.getElementById("2root"));
root2.render(parent);