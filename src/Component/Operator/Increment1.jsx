import React from 'react';

class Increment1 extends React.Component {

    render() {
        const { functionIncrement1 } = this.props
        return (
            <button onClick={functionIncrement1}>Increment Value 1</button>
        )
    }
}

export default Increment1;