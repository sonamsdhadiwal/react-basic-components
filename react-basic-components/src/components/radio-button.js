import React from 'react';

class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(changeEvent){
        this.setState({
            selectedOption: changeEvent.target.value
        })
    }

    render(){
        return(
            <form> 
                <label>
                    Fruits :
                </label>
                <label>
                    <input type="radio" 
                           value= "Grapes" 
                           checked={this.state.selectedOption === 'Grapes'}
                           onChange={this.handleOptionChange}/>
                    Grapes
                </label>
                <label>
                <input type="radio" 
                       value= "Apple" 
                       checked={this.state.selectedOption === 'Apple'} 
                       onChange={this.handleOptionChange}/>
                    Apple 
                </label>
            </form>
        )
    }
}

export default RadioButton;