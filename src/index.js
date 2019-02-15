import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './style.css';
import { BrowserRouter } from 'react-router-dom';


render(
  <BrowserRouter><App/></BrowserRouter>
  , document.getElementById('root')
);
