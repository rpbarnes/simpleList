import React from 'react';
import {Button} from 'react-bootstrap';
import styles from '../../css/base.css';
import ListDisplay from './ListDisplay.jsx';
import Check from 'react-icons/lib/fa/check';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 

    addItem(event) {
        event.preventDefault();
        this.props.onAddItem();
        this.setState({value: ''});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.callBackParent(this.state.value); // send the text back to the parent. This seems weird that you have to explicity do this...
    }

    render () {
        return (
            <form onSubmit={this.addItem}>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='Add something to your list' value={this.state.value} onChange={(e) => this.handleChange(e)}></input>
                            <span className='input-group-btn'>
                                <Button type='button' className='btn btn-primary'><Check /></Button>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ListItem
