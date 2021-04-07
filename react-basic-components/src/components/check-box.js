import React from 'react';

class CheckBoxes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isGoing: true,
                       numberOfGuests: 2,
                    };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <label> Select all checkbox : 
                    <input type="checkbox" 
                           name="isGoing" 
                           checked={this.state.isGoing}
                           onChange={this.handleInputChange}/>
                        
                    
                </label>
                <label>  Number of Guests
                    <input type="number"
                           name="numberOfGuests"
                           value = {this.state.numberOfGuests}
                           onChange={this.handleInputChange}/>
                </label>

                <label>Multiple Checkboxes</label>
            </form>
        )
    }
}

export default CheckBoxes;