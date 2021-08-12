import React, { Component } from 'react'

const data = [
    {id:'01',content:'你好，前端'},
    {id:'02',content:'你好，js'},
    {id:'03',content:'你好，react'}
]

export default class index extends Component {
    
    render() {
        console.log(this.props);    
        const { id, title } = this.props.match.params;
        let content;
        data.forEach(item => {
            if (item.id === id)
                content = item.content;    
        }); 
        return (
            <div>
                <ul>
                    <li>id:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{content}</li>
                </ul>
            </div>
        )
    }
}
