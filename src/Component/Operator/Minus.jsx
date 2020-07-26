import React from 'react';

class Minus extends React.Component {

    render() {
        const { functionMinus } = this.props
        return (
            <button className="btn-operator" onClick={functionMinus}>-</button>
        )
    }
}

export default Minus;