import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavLink from '../../Components/MyNavLink'
import News from './news'
import Messages from './messages'
import './index.css'

export default class index extends Component {

    render() {
        return (
            <div>
                <h3>动感表单</h3>
                {this._formRender()}
            </div>
        )
    }

    _formRender = ()=>{
        return (
            <div>
                <main class="box">
                    <div class="field">
                        <input type="text" placeholder="请输入账号" />
                    </div>
                    <div class="field">
                        <input type="text" placeholder="请输入密码" />
                    </div>
                </main>
            </div>
        )
    }
}
