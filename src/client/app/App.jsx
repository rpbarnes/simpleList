import React from 'react';
import ListModel from './ListModel.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:''
        };
    } 


    render () {
        return (
            <ListModel nameTag='reactList1'/>
        );
    }
}

export default App
