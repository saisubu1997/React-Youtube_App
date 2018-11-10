import React, { Component } from "react";
// import "./App.css";
import "./Style/style.css";
import ReactDOM from "react-dom";
// import "./index.css";
import * as serviceWorker from "./serviceWorker";
//working
import SearchBar from "./components/searchbar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_details";

const API = "AIzaSyCQx7xmTD-SG5kXo3QDrEf9qDWK_0pRlNA";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      SelectedVideo: null
    };
    YTSearch(
      {
        key: API,
        term: "deeplearning models"
      },
      data => {
        this.setState({
          videos: data,
          SelectedVideo: data[0]
        });
      }
    );

    this.YoutubeSearch("DeepLEarning In Js");
  }

  YoutubeSearch(term) {
    YTSearch(
      {
        key: API,
        term: term
      },
      data => {
        this.setState({
          videos: data,
          SelectedVideo: data[0]
        });
      }
    );
  }
  render() {
    return (
      // className="App"
      <div>
        <SearchBar
          onSearchTerm={term => {
            this.YoutubeSearch(term);
          }}
        />
        <VideoDetails video={this.state.SelectedVideo} />
        <VideoList
          onVideoSelect={SelectedVideo => {
            this.setState({ SelectedVideo });
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
