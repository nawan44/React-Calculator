import React from 'react';

class IncrementNilai2 extends React.Component {

    render() {
        const { functionIncrementNilai2 } = this.props
        return (
            <button onClick={functionIncrementNilai2}>Increment</button>
        )
    }
}

export default IncrementNilai2;