import React, { Component } from 'react';

class NumberOfEvents extends Component {
    constructor() {
        super();
        this.state = {
            eventsPerPage: 20
        }
    }

    handleInputChange = (event) => {
        this.setState({
            eventsPerPage: event.target.value
        });
    }

    render() {
        return <div className='NumberOfEvents'>
            <input 
                type="number"
                className="number"
                placeholder="20"
                value={this.state.eventsPerPage}
                onChange={this.handleInputChange}

            />
        </div>
    }
}

export default NumberOfEvents;