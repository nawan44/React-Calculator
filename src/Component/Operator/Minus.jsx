import React from 'react';

class Minus extends React.Component {

    render() {
        const { functionMinus } = this.props
        return (
            <button onClick={functionMinus}>-</button>
        )
    }
}

export default Minus;