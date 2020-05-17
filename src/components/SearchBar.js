import React, {Component} from 'react';

class SearchBar extends Component {
    state = {term: ''}

    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="input-group mb-3">
                <form className="form" onSubmit={this.onSearchSubmit}>
                    <input type="text" className="form-control" placeholder="Recipient's username"
                           aria-label="Recipient's username" aria-describedby="button-addon2"
                           onChange={event => this.setState({term: event.target.value})}
                    value={this.state.term}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;