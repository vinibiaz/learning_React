import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component {
  state = {
    // name: 'Vinicius Biesuz',
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      },

    ]
  };
  // handlePClick() { //se nao coloco como erro fuction tenho que fazer o bind
  //   // const { name } = this.state;
  //   // console.log(name);
  //   this.setState({ name: 'Vini' });
  // }
  // handleAClick = (event) => {//criar como errofuction nao tem que usar bind
  //   event.preventDefault();
  //   const { counter } = this.state;
  //   const nextcounter = counter + 1;
  //   this.setState({ counter: counter + 1 });
  // }
  timeoutUpdate = null;
  componentDidMount() {//quando o componente atualiza, busco em alguma API
    this.handleTimeout();
  }
  componentDidUpdate() {
    this.handleTimeout();

  }
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);

  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O titulo mudou';


    setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 3000);

  }

  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>

            <h1 >{post.title}</h1>
            <p>{post.body}</p>
          </div>

        ))}

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
