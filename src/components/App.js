import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "./youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const API_KEY = '';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    onSearchSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: API_KEY
            }
        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({selectedVideo});
    }

    render() {
        return (
            <div className="ui segment">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;