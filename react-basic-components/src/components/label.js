import React from 'react';

class Label extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted:' + this.state.value);
        // After submitting the form event.preventDefault helps to render the original value in input box
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name: </label>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </form>
        )
    }
}

export default Label;
