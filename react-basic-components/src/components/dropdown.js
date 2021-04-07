import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
       this.setState({
        value: event.target.value
       }); 
    }

    handleSubmit(event) {
        alert("Selected Fruit is " + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label> Select your favourite fruit :    
                    <select value={this.state.value} onChange={this.handleChange}>  
                        <option value="Apple">   Apple</option>
                        <option value="Banana">Banana</option>
                        <option value="PineApple">PineApple</option>
                        <option value="Strawberry">Strawberry</option>
                    </select>
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Dropdown;