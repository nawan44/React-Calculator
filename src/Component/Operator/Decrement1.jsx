import React from 'react';

class Decrement1 extends React.Component {

    render() {
        const { functionDecrement1 } = this.props
        return (
            <button onClick={functionDecrement1}>Decrement Value 1</button>
        )
    }
}

export default Decrement1;