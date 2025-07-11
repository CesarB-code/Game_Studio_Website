import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SecondFile from './SecondFile'
import VideoHome from './VideoHome/VideoHome';
import BackGround from './VideoHome/wp-coponents/BackGround.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import MyImage2 from '/Users/cesarbarrera/my-react-app/src/VideoHome/assets/istockphoto-1560833158-1024x1024.jpg'; // adjust path as needed

import { Carousel } from '../node_modules/react-bootstrap/';
import { CarouselItem } from '../node_modules/react-bootstrap/';
import { CarouselCaption } from '../node_modules/react-bootstrap/';
import draw from './VideoHome/VideoHome.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <VideoHome>

    </VideoHome>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
