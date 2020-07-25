import React from 'react';

class Increment2 extends React.Component {

    render() {
        const { functionIncrement2 } = this.props
        return (
            <button onClick={functionIncrement2}>Increment Score 2</button>
        )
    }
}

export default Increment2;