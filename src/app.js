import React, {Component} from 'react';
import {render} from 'react-dom';
import textItem from 'client/app/textItem.jsx';
import TextModel from 'client/app/TextModel.jsx';

var app = app || {}; // this is like a global variable it seems.

// track which items are being worked on or completed.
app.ALL_ITEMS = 'all'; 
app.ACTIVE_ITEMS = 'active';
app.COMPLETED_ITEMS = 'completed';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowShowing: app.ALL_ITEMS,
            editing: null,
            newItem:'' 
        };
    }

    toggle(itemToToggle) {
        this.props.model.toggle(itemToToggle); // model is my textModel
    }

    destroy(item) {
        this.props.model.destroy(item);
    }

    //edit(item) {
    //    this.setState({editing: text.id}); // text.id unique id number to keep track of item.
    //}

    cancel() {
        this.setState({editing: null});
    }

    save(itemToSave, text) {
        this.props.model.save(itemToSave, text);
        this.setState({editing:null});
    }



    
    render() {
        return ( // right now throw this in render so I can see if it works.
            <textItem 
                onToggle={this.toggle.bind(this,textI)}     // (done) When they click on it
                onDestroy={this.destroy.bind(this,textI)}   // (done) When they destroy the box
                //onEdit=(this.edit.bind(this,textI)}         // not written When they are editing the text box
                onCancel={this.cancel}                      // (done) When they cancel editing
                //onSave={this.save.bind(this,textI)}         // (done) model written When the submit and save
            />
        );
    }
}

var model = TextModel('my list');
render(
  <App model={model} />,
  document.getElementById('app')
);
