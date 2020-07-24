import React from 'react';
import IncrementNilai1 from './Component/IncrementNilai1';
import IncrementNilai2 from './Component/IncrementNilai2';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            nilai1: 1,
            nilai2: 2,
            hasil: 0
        }
    }

    functionIncrementNilai1 = () => {
        this.setState({
            nilai1: parseInt(this.state.nilai1) + 1
        })
    }
    functionIncrementNilai2 = () => {
        this.setState({
            nilai1: parseInt(this.state.nilai2) + 1
        })
    }

  

    render() {
        return (
            <div>
                Selamat Datang di React JS CFH

                <p> {this.state.nilai1} </p>
                <p> {this.state.nilai2} </p>

                Nilai 1 : <input type="number" onChange={this.functionChange('nilai1')} /> <br />
                Nilai 2 : <input type="number" onChange={this.functionChange('nilai2')} />

                <IncrementNilai1 functionIncrement={this.functionIncrementNilai1} />
                <IncrementNilai2 functionIncrement={this.functionIncrementNilai2} />


            </div>
        )
    }
}

export default App;