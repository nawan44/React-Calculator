import React from 'react';

class Modulus extends React.Component {

    render() {
        const { functionModulus } = this.props
        return (
            <button className="btn-operator" onClick={functionModulus}>%</button>
        )
    }
}

export default Modulus;