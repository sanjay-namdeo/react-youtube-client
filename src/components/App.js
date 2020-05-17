import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "./youtube";

const API_KEY = '';

class App extends React.Component {
    onSearchSubmit = async (term) => {
        const videos = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: API_KEY
            }
        });
        console.log(videos);
    }

    render() {
        return (
            <SearchBar onSubmit={this.onSearchSubmit}/>
        )
    }
}

export default App;