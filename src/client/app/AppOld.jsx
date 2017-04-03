import React from 'react';
import Button from 'react-bootstrap/lib/Button';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Click Me',
            buttonState: 'primary'
        };
        this.handleClick = this.handleClick.bind(this); // what does this statement do?
    } 

    handleClick () {
        if (this.state.buttonState === 'primary') {
            this.setState({
                buttonText: 'suck it',
                buttonState: 'success'
            });
        } else {
            this.setState({
                buttonText: 'Click Me',
                buttonState: 'primary'
            });
        }
    }

    render () {
        return (
            <div className='container'>
                <div className='col-md-4 col-md-offset-2'>
                    <h1>Hello Ass Hat</h1>
                </div>
                <div className='col-md-4'>
                    <Button bsStyle={this.state.buttonState} bsSize='large' onClick={this.handleClick}>{this.state.buttonText}</Button>
                </div>
            </div>
        );
    }
}

export default App
