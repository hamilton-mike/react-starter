import React from 'react';

// taking data and puttin it in app.js
import movies from '../../data/exampleData';
import MovieList from './MovieList.js';
// import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list: movies
    }
  }
  search() {
    this.setState({
      list: movie
    })
  }

  render() {
    //console.log  here
    console.log(this.state.list);

    return(
    <div>
     <input type="text" placeholder="Search Movies"></input> <button>Submit</button>
     <MovieList
     title={this.state.list}
     search={this.search.bind(this)}
     />
    </div>
  )}
}

export default App;

document.querySelector("body > form > div:nth-child(2) > button")
