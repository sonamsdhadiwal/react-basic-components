import React from 'react';

// export default function ButtonPage() {
//     return <h1>Sign In</h1>;
// }

class ButtonPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        window.open();
    }

    render() {
        return(
            <button onClick={this.handleClick}> 
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default ButtonPage;
