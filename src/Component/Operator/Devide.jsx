import React from 'react';

class Devide extends React.Component {

    render() {
        const { functionDevide } = this.props
        return (
            <button onClick={functionDevide}>/</button>
        )
    }
}

export default Devide;