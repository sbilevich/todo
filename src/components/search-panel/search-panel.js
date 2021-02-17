import React, {Component} from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        text : ''
    }

    onTextChange = (e) => {
        const {onSearch} = this.props;
        this.setState({
            text: e.target.value
        })

        onSearch(e.target.value)
    }
    render() {
        return <input type="text" 
        className="form-control search-input"
        value = {this.state.text}
        onChange={this.onTextChange}
        placeholder="search"/>;
    }
    
}

