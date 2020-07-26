import React from 'react';

class Increment2 extends React.Component {

    render() {
        const { functionIncrement2 } = this.props
        return (
            <button className="btn-ment" onClick={functionIncrement2}>Increment Value 2</button>
        )
    }
}

export default Increment2;