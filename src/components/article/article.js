import { Component } from "react";
import '../article/article.scss';
import Vector from '../article/Vector.png'
import UncontrolledExample from './carousel.js';

const Article = () => {
    return(
        <div className="everything">
            <div className="carousel">
                <UncontrolledExample/>
            </div>
            <div className="text">
                <h2>About it</h2>
                <p><span>Country:</span> Brasil</p>
                <p><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p><span>Price:</span> 16.99$</p>
            </div>
        </div>
    )
}

export default Article;