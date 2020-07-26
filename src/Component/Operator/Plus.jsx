import React from 'react';

class Plus extends React.Component {

    render() {
        const { functionPlus } = this.props
        return (
            <button className="btn-operator" onClick={functionPlus}>+</button>
        )
    }
}

export default Plus;