import React from 'react';
import Increment1 from './Component/Increment1';
import Increment2 from './Component/Increment2';
import Decrement1 from './Component/Decrement1';
import Decrement2 from './Component/Decrement2';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            score1: 1,
            score2: 2,
            hasil: 0
        }
    }

    functionIncrement1 = () => {
        this.setState({
            score1: parseInt(this.state.score1) + 1
        })
    }
    functionIncrement2 = () => {
        this.setState({
            score2: parseInt(this.state.score2) + 1
        })
    }
    functionDecrement1 = () => {
        this.setState({
            score1: parseInt(this.state.score1) - 1
        })
    }
    functionDecrement2 = () => {
        this.setState({
            score2: parseInt(this.state.score2) - 1
        })
    }
    functionChange = name => ({ target: { value } }) => {
        this.setState({
            [name]: value
        })
    }

  

    render() {
        return (
            <div>
                <h1>React JS Calculator</h1>

                <p> {this.state.score1} </p>
                <p> {this.state.score2} </p>

                Score 1 : <input type="number" onChange={this.functionChange('score1')} /> <br />
                Score 2 : <input type="number" onChange={this.functionChange('score2')} /><br />

                <Increment1 functionIncrement1={this.functionIncrement1} /><br />
                <Decrement1 functionDecrement1={this.functionDecrement1} /><br />

                <Increment2 functionIncrement2={this.functionIncrement2} /><br />
                <Decrement2 functionDecrement2={this.functionDecrement2} /><br />


            </div>
        )
    }
}

export default App;