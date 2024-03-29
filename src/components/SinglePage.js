import React from 'react';
import Page from './Page';
import FormPage from './FormPage';
import logo from '../img/logo-hotelgram.png'

const SinglePage = ({id}) => (<Page singleMode={true} id={id}>
    <div className="f2 mb2">Sale offer</div>
    <div id="pdf">This is the offer generated by Pricing App</div>
    <div id="sale-contact-container" className="text-left float-left">
        <p>Artur Sieklucki</p>
        <p>505 505 505</p>
        <p>artur.sieklucki@hotelgram.pl</p>
    </div>
    <div id="logo-container" className="text-right float-right">
                <img className="img-fluid" src={logo}></img>
    </div>
    <div className="cf w-100 mt4">
        <div className="fl w-50 bg-washed-blue vh-25 pa3 ">
            
        </div>
    </div>
</Page>);

export default SinglePage;