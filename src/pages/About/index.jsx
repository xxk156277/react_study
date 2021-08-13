import React, { Component } from 'react'
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBell, faWifi } from "@fortawesome/free-solid-svg-icons";

export default class index extends Component {
    render() {
        return (
            <div >
                <h3>移动端多页面切换动画</h3>
                <div className="box1">
                    {this._mobileRender()}
                </div>
            </div>
        )
    }

    _mobileRender = () => {
        return (
            <div>
                <div id="body">
                    <main>
                        <div id="home">
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>  
                        </div>
                        <div id="video">
                            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>  
                        </div>
                        <div id="live">
                            <FontAwesomeIcon icon={faWifi}></FontAwesomeIcon>  
                        </div>        
                    </main>
                    <nav>
                        <a href="#home">home</a>
                        <a href="#video">video</a>
                        <a href="#live">live</a>
                    </nav>
                </div>
            </div>
        )
    }
}
