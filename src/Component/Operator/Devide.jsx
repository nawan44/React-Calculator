import React from 'react';

class Devide extends React.Component {

    render() {
        const { functionDevide } = this.props
        return (
            <button className="btn-operator" onClick={functionDevide}>/</button>
        )
    }
}

export default Devide;