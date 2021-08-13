import React, { Component } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'
import './index.css'

class index extends Component {
    render() {
        return (
            <div>
                <h3>拖拽页面</h3>
                {this._formRender()}
            </div>
        )
    }

    _formRender = () => {
        return (
            <div className="my-Draggable">
                <Draggable
                    axis='x'
                    handle=".box1"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[25,25]}
                    scale={1}
                    onStart={this._onStart}
                    onDrag={this._onDrag}
                    onStop={this._onStop}
                >
                    <div className="box1"></div>
                </Draggable>
            </div>
        )
    }
    eventLogger = (e, data) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
      };
    _onDrag = (e,data) => {
        this.eventLogger(e,data)
    }
    _onStop = () => { }
    _onStart = () => { }
}

export default Draggable