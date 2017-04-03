import React from 'react';
import styles from '../../css/base.css';

class ListDisplay extends React.Component {
    // this should handle the add item and keeping track of the all the items in the list
    constructor(props) {
        super(props);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    } 
    
    handleCheckBox(keyChecked) {
        this.props.onCheckBox(keyChecked);
    }

    render () {
        var listEntries = this.props.entries;
        var handleCheckBox = this.handleCheckBox;
        // can you do this in jsx?
        function createList(item) {
            // check item.checked and fill in the checkbox 
            var key = item.key;
            var checked = item.checked;
            return (
                    <li key={key} className='list-group-item' data-color='success'>
                        <label><input key={key} type='checkbox' value='' checked={checked} onChange={handleCheckBox.bind(this, key)}/></label>
                        {item.text}
                    </li>
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
