import React from 'react';
import Increment1 from './Component/Operator/Increment1';
import Increment2 from './Component/Operator/Increment2';
import Decrement1 from './Component/Operator/Decrement1';
import Decrement2 from './Component/Operator/Decrement2';
import Plus from'./Component/Operator/Plus';
import Minus from'./Component/Operator/Minus';
import Multiple from './Component/Operator/Multiple';
import Devide from './Component/Operator/Devide';
import Modulus from './Component/Operator/Modulus';
import Headers from './Component/header';
import Footers from './Component/footer';



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
    functionPlus = () => {
        this.setState({
            yield: parseInt(this.state.score1) + parseInt(this.state.score2)
        })
    }
    functionMinus = () => {
        this.setState({
            yield: parseInt(this.state.score1) - parseInt(this.state.score2)
        })
    }
    functionMultiple = () => {
        this.setState({
            yield: parseInt(this.state.score1) * parseInt(this.state.score2)
        })
    }
    functionDevide = () => {
        this.setState({
            yield: parseInt(this.state.score1) / parseInt(this.state.score2)
        })
    }
    functionModulus = () => {
        this.setState({
            yield: parseInt(this.state.score1) % parseInt(this.state.score2)
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
                <Headers/>                <h1>React JS Calculator</h1>

                <p> Value 1 : <br/>
                    {this.state.score1} </p> 
                <p> Value 2 : <br/>
                    {this.state.score2} </p>

                <p> Result : <br/>
                    {this.state.yield} </p>

                Value 1 : <input type="number" onChange={this.functionChange('score1')} /> <br />
                Value 2 : <input type="number" onChange={this.functionChange('score2')} /><br />


                <Increment1 functionIncrement1={this.functionIncrement1} /><br />
                <Decrement1 functionDecrement1={this.functionDecrement1} /><br />

                <Increment2 functionIncrement2={this.functionIncrement2} /><br />
                <Decrement2 functionDecrement2={this.functionDecrement2} /><br />

                <Plus functionPlus={this.functionPlus}/> <br />
                <Minus functionMinus={this.functionMinus}/> <br />
                <Multiple functionMultiple={this.functionMultiple}/> <br />
                <Devide functionDevide={this.functionDevide}/> <br />
                <Modulus functionModulus={this.functionModulus}/> <br />
                <Footers/>
            </div>
        )
    }
}

export default App;