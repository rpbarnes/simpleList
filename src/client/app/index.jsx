
import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx'; // explicitly importing shizz.
import textItem from './textItem.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Hello React! Suck my balls!</p>
                <App />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));

        
