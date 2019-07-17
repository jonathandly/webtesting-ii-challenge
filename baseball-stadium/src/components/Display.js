import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>At-Bat</h1>
                <span data-testid="balls">Balls: {this.props.balls}</span>
                <span data-testid="strikes">Strikes: {this.props.strikes}</span>
            </>
        );
    }
}

export default Display;
