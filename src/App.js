import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
// import './components/card-list/card-list.styles.css';
import './App.css';
import { Card } from './components/card/card.component';
// import { Details } from './components/card/card.details';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

class App extends Component{
  constructor(){
    super();

    this.state={
      posts:[]
    };
  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>response.json())
      .then(users=>this.setState({posts:users}))
  }

  render(){
    return(
        <div className="App"> 
          <CardList posts={this.state.posts}/>
        </div>
        
    );
  }
}
export default App;
