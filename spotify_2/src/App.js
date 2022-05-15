import { Component } from "react";
import "./App.css";
import AlbumData from "./components/AlbumData";

import AddAlbum from "./components/AddAlbum";
import Albums from "./components/Albums";
class App extends Component {
  state = {
    albums: AlbumData,
  };

  addAlbum = (albumItem) => {
    const newAlbumList = [albumItem, ...this.state.albums];
    return this.setState({ albums: newAlbumList });
  };

  removeAlbum = (id) => {
    const removeArr = [...this.state.albums].filter((albumItem) => {
      return albumItem.id !== id;
    });
    this.setState({ albums: removeArr });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="header">
            <AddAlbum onAdd={this.addAlbum} albums={this.state.albums} />
          </div>

          <div className="albums">
            <div className="albums-box">
              <h1 className="albums-heading">Albums</h1>
              <div className="album-item">
                <Albums
                  albums={this.state.albums}
                  removeAlbum={this.removeAlbum}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;