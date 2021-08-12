import React, { Component } from 'react'
import { Route, Redirect,Link } from 'react-router-dom'
import Detail from './Detail'

export default class index extends Component {
    state = {
        news:[
            {id:'01',title:'new01'},
            {id:'02',title:'new02'},
            {id:'03',title:'new03'},
        ]
    }
    render() {
        const { news } = this.state; 
        return (
            <div>
                <ul>
                    {             
                        news.map(newObj=>{
                            return(
                                <li key={newObj.id}>
                                    <Link to={`/home/news/detail/${newObj.id}/${newObj.title}`}>{newObj.title}</Link>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path='/home/news/detail/:id/:title' component={Detail} />
            </div>
        )
    }
}
