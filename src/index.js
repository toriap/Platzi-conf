// const element = document.createElement("h1");
// element.innerText = "Hola, Platzi Badges!";

// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react"; // hace el papel de createElement
import ReactDom from "react-dom";//hace el papel de appendChild()
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import App from './components/App'

// const jsx = <h1>Hola, Platzi Badges!</h1>//para no tener que escribi createElement() esto se llama jsx es necesario en cadaarchivo js hagamos import React from "react"
// const element = React.createElement("a",
//  {href: "https://platzi.com"},
//  "Ir a Platzi");
// const name = "alex"
// const sum = () => 3+3;
// const element = React.createElement("h1", {},`hola soy ${name}` )
// const jsx = <h1>hola soy, {__expresiones__}</h1>
// const element = React.createElement(//el equivalente con createElement()
//   "div",
//   {},
//   React.createElement("h1", {}, "Hola, soy Chris"),
//   React.createElement("p", {}, "soy casi ingeniero de la web Frontend.")
// )
// const element = (<div>
//   <h1>Hola , soy chris</h1>
//   <p>Soy casi ingeniero frontend</p>
// </div>);


const container = document.getElementById("app");

// ReactDom.render(___que___,__donde__);
ReactDom.render(<App />, container);