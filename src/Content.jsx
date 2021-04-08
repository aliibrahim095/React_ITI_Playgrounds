import React, { Component } from "react";
import { render } from "react-dom";

class Content extends Component {
    state = {
        count:0,
        seconds:0

    };
    
    increaseCounter= () => {
        clearInterval(this.timer);
        this.setState({count:this.state.count+1})
        this.setState({seconds:this.state.seconds+60})
        this.timer = setInterval(this.tick, 1000);
    };
    decrementCounter= () => {
        clearInterval(this.timer);
        this.timer = setInterval(this.tick, 1000);
        this.setState({count:this.state.count-1})
        if (this.state.seconds>59) {
            this.setState({seconds:this.state.seconds-60})
        }
        else{
            this.setState({count:0,seconds:0})
        }
    };
    componentDidMount(){
        this.timer = setInterval(this.tick, 1000);
      }
    tick=()=>{
        if(this.state.seconds>0){
            this.setState({seconds:this.state.seconds-1})
            this.setState({count:Math.ceil(this.state.seconds/60)})
        }else{
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col-12 alert bg-dark text-light text-center p-5">
                        <button  disabled={this.state.count===0} onClick={this.decrementCounter}  className="btn btn-danger p-4 mr-2">-</button>
                        <b className="alert alert-primary p-5 mr-2"><span className="badge badge-warning p-2 mr-1">{this.state.count}</span>{this.state.count===1 ? 'Minute':'Minutes'} </b>
                        <button  disabled={this.state.count===5}  onClick={this.increaseCounter} className="btn btn-primary p-4">+</button>

                    </div>
                </div>
                <div className="row">
                   {this.state.count>0 && <b className="col-12 alert alert-primary p-5 mr-2 text-center mb-5"><span className="badge badge-warning p-2 mr-1">{this.state.seconds}</span> {this.state.seconds===1 ? 'Second':'Seconds'}</b>}
                </div>
            </div>
        );
    }
}

export default Content;
