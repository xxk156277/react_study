import './App.css';

import React, { Component } from 'react'
import {Route,Redirect,Switch} from "react-router-dom"
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './Components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='button'>
                <MyNavLink to='/about'>移动端多页面切换动画</MyNavLink>
                <MyNavLink to='/home'>Home</MyNavLink>    
        </div>
        <div id="border">
            <div className='content'>
              <Switch>
                  <Route path='/about' component={About}></Route> 
                  <Route path='/home' component={Home}></Route> 
                  <Redirect to='/about'></Redirect>    
              </Switch>   
            </div>
        </div>
      </div>
    )
  }
}