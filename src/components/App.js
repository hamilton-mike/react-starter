import React from 'react';

// taking data and puttin it in app.js
import movies from '../../data/exampleData';
import MovieList from './MovieList.js';
// import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props){
    super(props)
    //things that are going to change
    this.state = {
      list: movies,
      input: ''
    }// This binding is necessary to make 'this' work in the callback
    this.search = this.search.bind(this);
    this.match = this.match.bind(this)
  }
  search(event) {
    console.log(event.target.value, 'inside search method')
    this.setState({ // setState makes changes
      input: event.target.value
    })
  }

  match() {
    var res = [];
    this.state.list.filter(movie => {
      if(movie.title.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase())) {
        res.push(movie);
      }
    })

    this.setState({
      list: res
    })
  }


  render() {
    //console.log  here

    return(
    <div>
     <input type="text" placeholder="Search Movies" value={this.state.input} onChange={this.search.bind(this)}></input> <button onClick={this.match.bind(this)}>Go!</button>
     <MovieList
     title={this.state.list}
     search={this.search.bind(this)}
     match={this.match.bind(this)}
     />
     {console.log(this.state.list)}
    </div>
  )}
}

export default App;
