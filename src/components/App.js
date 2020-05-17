import React from 'react';
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit = (term) => {
        console.log('term', term);
    }

    render() {
        return (
            <div className="container px-lg-5">
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;