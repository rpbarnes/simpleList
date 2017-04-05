import React from 'react';
import styles from '../../css/base.css';
import Button from 'react-bootstrap/lib/Button';
import Trash from 'react-icons/lib/fa/trash';

class ListDisplay extends React.Component {
    // this should handle the add item and keeping track of the all the items in the list
    constructor(props) {
        super(props);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    } 
    
    handleCheckBox(keyChecked) {
        this.props.onCheckBox(keyChecked);
    }

    handleDeleteButton(keyChecked) {
        this.props.onDelete(keyChecked);
    }

    handleItemClick(key) {
        this.props.onItemClick(key);
    }


    render () {
        var listEntries = this.props.entries;
        var handleCheckBox = this.handleCheckBox;
        var handleDeleteButton = this.handleDeleteButton;
        var handleItemClick = this.handleItemClick;
        // can you do this in jsx?
        function createList(item) {
            // check item.checked and fill in the checkbox 
            var key = item.key;
            var checked = item.checked;
            return (
                    <Button key={key} onClick={handleItemClick.bind(this,key)} className='list-group-item list-group-item-action' data-color='success'>
                        <label><input key={key} type='checkbox' value='' checked={checked} onChange={handleCheckBox.bind(this, key)}/></label>
                        <span>
                        {item.text}
                        </span>
                        <Button className='btn btn-primary pull-right' key={key} onClick={handleDeleteButton.bind(this,key)}><Trash /></Button>
                    </Button>
            );
        }
        var listItems = listEntries.map(createList);

        return (
            <ul className={styles.theList}>
                {listItems}
            </ul>
        );
    }
}

export default ListDisplay
