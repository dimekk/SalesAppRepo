import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import SinglePage from "./components/SinglePage";
import FormPage from "./components/FormPage";
import PrintButton from "./components/PrintButton";
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


const App = () => (
    
    <div className="bg-black-80 w-100 pv5">
        <div id="title" className="white mt3 tc f3">Sale Pricing App</div>        
        <FormPage
        />
        <SinglePage id={"offerPDF"} />
        <PrintButton id={"offerPDF"} label={"Generate an offer in PDF"} />
    </div>);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
