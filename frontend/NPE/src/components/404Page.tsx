import React from 'react';
import './404Page.css';
const PageNotFound: React.FC = () => {
    return (
        <>
            <div className='error-container'>
                <h1 className='error-header'>This page does not exist yet!</h1>
                <h2 className='error-para'>Pour yourself a cup of coffee while you wait, my treat.</h2>
            </div>
            
            {/* Coffee maker animation container */}
            <div className="container">
                <div className="coffee-header">
                    <div className="coffee-header__buttons coffee-header__button-one"></div>
                    <div className="coffee-header__buttons coffee-header__button-two"></div>
                    <div className="coffee-header__display"></div>
                    <div className="coffee-header__details"></div>
                </div>
                <div className="coffee-medium">
                    <div className="coffe-medium__exit"></div>
                    <div className="coffee-medium__arm"></div>
                    <div className="coffee-medium__liquid"></div>
                    <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
                    <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
                    <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
                    <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
                    <div className="coffee-medium__cup"></div>
                </div>
                <div className="coffee-footer"></div>
            </div>

            {/* Credit for the CSS animation */}
            <small className='credit'>
                Coffee maker animation from: 
                <a 
                    id='link-cred' 
                    href='https://codepen.io/hjdesigner' 
                    target='_blank' 
                    rel='noopener noreferrer'
                > 
                    CodePen.io
                </a>
            </small>
        </>
    );
};

export default PageNotFound;
