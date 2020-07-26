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
import './Component/Operator/operatorStyle.css';
import './Component/componentStyle.css';


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
                <Headers/>                
                <div className="form">
                Value 1 : <br/>
                <p className="value">     {this.state.score1} </p> 
                Value 2 : <br/>
                <p className="value">  {this.state.score2} </p>

                Result : <br/>
                <p className="value">     {this.state.yield} </p>
                </div>
                <p className="inputValue">
                Input Value 1 : <input type="number" onChange={this.functionChange('score1')} /></p> 
                <p className="inputValue">
                Input Value 2 : <input type="number" onChange={this.functionChange('score2')} /></p>
                <br />
                <hr style={{marginBottom:"10px"}} />

                <Increment1 functionIncrement1={this.functionIncrement1} />
                <Decrement1 functionDecrement1={this.functionDecrement1} /><br />

                <Increment2 functionIncrement2={this.functionIncrement2} />
                <Decrement2 functionDecrement2={this.functionDecrement2} /><br />
                <br />

                <Plus functionPlus={this.functionPlus}/>
                <Minus functionMinus={this.functionMinus}/> 
                <Multiple functionMultiple={this.functionMultiple}/> 
                <Devide functionDevide={this.functionDevide}/> 
                <Modulus functionModulus={this.functionModulus}/> 
                <Footers/>
            </div>
        )
    }
}

export default App;