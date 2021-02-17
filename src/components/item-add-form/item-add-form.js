import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAdddForm extends Component {
    
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit =(e) => {
        const {onAddItem} = this.props;
        const {label} = this.state;
        e.preventDefault();
        onAddItem(label);
        this.setState({
            label: ''
        })
    }
    render() {
        const {label} = this.state;
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit} >
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done" 
                       value={label}/>
                <button 
                    className="btn btn-outline-secondary add-form-btn">
                    Add item
                </button>
            </form>
          
        )
    }
   
}

