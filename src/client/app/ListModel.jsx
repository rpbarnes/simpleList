import React from 'react';
import styles from '../../css/base.css';
import ListItem from './ListItem.jsx';
import ListDisplay from './ListDisplay.jsx';

//// ---- Data Toggle for cross out ---- ////
// Now each list item should also feature a toggle element that when checked causes the text in the list to be crossed out.
// toggle will have same key as list item. It will have one state 'checked = true or false'. ListItem will need to know about this state. 
// Should Toggle belong to ListItem or ListModel?
// For now Toggle will belong to ListItem and will be grandchild of ListModel.
// ListItem will handle Toggle.state.checked to decide on cross out text or not.
// ListModel will know the state of Toggle.state.checked - For now this does nothing. In future I want to keep track of what is completed v incompleted.

//// ---- Make text in list modifiable ---- ////
// you could incorporate an <a> that calls a function to accept text edits.

class ListModel extends React.Component {
    // this should handle the add item and keeping track of the all the items in the list
    constructor(props) {
        super(props);
        this.state = {
            nameTag: this.props.nameTag,
            items: [],
            text: '',
            value: '',
            activeItem: ''
        };
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleTextChanged = this.handleTextChanged.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.getItem = this.getItem.bind(this);
    } 

    // Use this to load in old items
    componentWillMount() {
        // this runs right before rendering. I have to wait until this.store is defined before I can call it. I don't think this is the best way to do this though...
        this.setState({items: this.load(this.state.nameTag)}); 
    }
    
    handleDelete(keyChecked) {
        var itemArray = this.state.items.filter( function(item) {
            if (item.key !== keyChecked) {
                return item;
            }
        });
        // this is weird it doesn't set itemArray to empty...
        if (itemArray.length == 0) {
            this.setState({items: []});
        } else {
            this.setState({items:itemArray});
        }
        console.log(itemArray);         // this gives [] - expected
        console.log(this.state.items);  // this always has one more object than what is in itemArray... WTF?
        this.store(this.state.nameTag, itemArray);

    }

    handleAddItem(itemText) {
        // add item to local storage and to the this.state.items array
        var itemArray = this.state.items;
        itemArray.push({
            text: this.state.text,
            key: Date.now(),
            checked: 0
        })
        this.store(this.state.nameTag, this.state.items);
        this.setState({
            items: itemArray,
            text: ''
        })
        event.preventDefault();
    }

    handleItemClick(keyClicked) {
        this.getItem(keyClicked);
        console.log(this.state.activeItem);
    }

    getItem(keyToFind) {
        // sets the activeItem that corresponds to keyToFind
        var key = this.props.keyToFind;
        var item = this.state.items.filter( function(item){
            return (item.key === keyToFind);
        });
        this.setState({activeItem:item}) 
    }

    handleCheckBox(keyChecked) {
        var items = [];
        this.state.items.map(function(item) {
            if (item.key == keyChecked) {
                if (item.checked == 0) {
                    item.checked = 1;
                } else {
                    item.checked = 0;
                };
            };
            items.push(item);
        });
        this.setState({items:items});
        this.store(this.state.nameTag, this.state.items);
    }

    store(nameTag, data) {
        console.log(data);
        return localStorage.setItem(nameTag,JSON.stringify(data));
    }

    load(nameTag) {
        var fromStore = localStorage.getItem(nameTag);
        return (fromStore && JSON.parse(fromStore)) || []; // This is straight from somewhere else I'm guessing this puts the json string to an array elemet.
    }
        

    handleTextChanged(itemText) { // this way I'm, explicitly recieving a variable from the child.
        this.setState({text: itemText});
    }

    render() {
        return (
            <div className='col-md-4 col-md-offset-4'>
                <div className={styles.todoListMain}>
                    <div className={styles.header}>
                        <ListItem callBackParent={this.handleTextChanged} onAddItem={this.handleAddItem} text={this.state.text} value={this.state.value}/>
                        <ListDisplay entries={this.state.items} onItemClick={this.handleItemClick} onCheckBox={this.handleCheckBox} onDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListModel

