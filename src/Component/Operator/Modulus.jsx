import React from 'react';

class Modulus extends React.Component {

    render() {
        const { functionModulus } = this.props
        return (
            <button onClick={functionModulus}>%</button>
        )
    }
}

export default Modulus;