import React from 'react';

class Multiple extends React.Component {

    render() {
        const { functionMultiple } = this.props
        return (
            <button onClick={functionMultiple}>*</button>
        )
    }
}

export default Multiple;