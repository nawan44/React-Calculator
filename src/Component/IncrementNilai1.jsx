import React from 'react';

class IncrementNilai1 extends React.Component {

    render() {
        const { functionIncrementNilai1 } = this.props
        return (
            <button onClick={functionIncrementNilai1}>Increment</button>
        )
    }
}

export default IncrementNilai1;