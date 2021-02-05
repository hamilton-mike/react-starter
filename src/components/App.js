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
      input: '', //searching
      inputTwo: '' //adding
    }// This binding is necessary to make 'this' work in the callback
    this.typing = this.typing.bind(this);
    this.match = this.match.bind(this);
    this.add = this.add.bind(this);
  }

  typing(event) {
    // console.log(event.target.value)
    // this.setState({
    //   input: event.target.value
    // })
    this.setState({ // setState makes changes
      [event.target.name]: event.target.value
    })
  }


  match() {
    var res = []; // array of results
    this.state.list.filter(movie => { //filter through movies and see if typed input matches
      if(movie.title.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase())) {
        res.push(movie);
      }
    })

    this.setState({ //setState makes changes
      list: res
    })
  }

  add(newTitle) {
    // console.log()
    this.setState({
      list: [...this.state.list, {title: newTitle}]
    }, () => console.log(this.state))
  }

  render() {
    //console.log  here

    return(
    <div>
     <input
      name="input"
      placeholder="Search Movies"
      value={this.state.input}
      onChange={this.typing}></input>
     <button onClick={this.match}>Go!</button>

     <MovieList
     title={this.state.list}
     search={this.typing}
     match={this.match}
     />

     <input
      name="inputTwo"
      placeholder="Add movie title here"
      value={this.state.inputTwo}
      onChange={this.typing}></input>
    <button onClick={() => this.add(this.state.inputTwo)}>Add</button>
    </div>

  )}
}

export default App;
