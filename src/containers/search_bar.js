import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar  extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        console.log(event.target.value);
        this.setState({term:event.target.value});
    }
    onFormSubmit(event){
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                value={this.state.term}
                placeholder="Get weather forecast by city"
                className = "form-control"
                onChange ={this.onInputChange} />
               <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
