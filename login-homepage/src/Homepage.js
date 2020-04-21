import React, { Component } from 'react';

class Homepage extends Component {
    state = {  }

    handleLogout = () => {
        const {update} = this.props;
        update();
        this.props.history.push("/login");       
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Welcome Page!!</h1>
                <button type="button" className="btn btn-primary" onClick={this.handleLogout}>Logout</button>
            </React.Fragment>
        );
    }
}
 
export default Homepage;