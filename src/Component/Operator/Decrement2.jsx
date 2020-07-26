import React from 'react';

class Decrement2 extends React.Component {

    render() {
        const { functionDecrement2 } = this.props
        return (
            <button className="btn-ment" onClick={functionDecrement2}>Decrement Value 2</button>
        )
    }
}

export default Decrement2;