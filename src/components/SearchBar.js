import React, {Component} from 'react';

class SearchBar extends Component {
    state = {term: ''}

    onInputChange = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (

            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onInputChange}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input type="text"
                               onChange={e => this.setState({term: e.target.value})}
                               value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;