import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    
    render() {
        
        return (
            <div>
                <Link to='/'>Home</Link><br />
                <Link to='/protected'>Protected</Link><br />
            </div>
        );
    }
};

export default Home