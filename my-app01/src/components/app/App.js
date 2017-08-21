import './App.css';
import React, {Component} from 'react';
import logo from './logo.svg';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" />
                    <h2>你好 REACT!</h2>
                </div>
                <p className="App-intro">we start react gogogo!</p>
            </div>
        );
    }
}

export default App;