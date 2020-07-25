import React from 'react';

class Decrement2 extends React.Component {

    render() {
        const { functionDecrement2 } = this.props
        return (
            <button onClick={functionDecrement2}>Decrement Score 2</button>
        )
    }
}

export default Decrement2;