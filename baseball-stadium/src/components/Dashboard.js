import React from 'react';

import Display from './Display';

class Dashboard extends React.Component {
    state = {
        balls: 0,
        strikes: 0,
        fouls: 0,
        hit: 0
    };

    buttonHandler = () => {
        let rand = Math.random();
        if(rand <= 0.25) {
            if(this.state.balls > 3) {
                this.setState({ balls: 0, strikes: 0 });
            } else {
                this.setState({ balls: this.state.balls + 1 });
            }
        } else if(rand > 0.25 && rand < 0.5) {
            if(this.state.strikes > 2) {
                this.setState({ balls: 0, strikes: 0 });
            } else {
                this.setState({ strikes: this.state.strikes + 1 });
            }
        } else if(rand > 0.5 && rand < 0.75) {
            this.setState({ fouls: this.state.fouls + 1 });
        } else {
            this.setState({ hit: this.state.hit + 1 });
        }
    }

    render() {
        return (
            <>
                <Display 
                    balls={this.state.balls}
                    strikes={this.state.strikes}
                />
                <button onClick={this.buttonHandler}>Throw Pitch</button>
            </>
        );
    }
}

export default Dashboard;
