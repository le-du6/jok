import React from 'react';
import { Button, ButtonToolbar, Navbar } from 'react-bootstrap';
import emojii from '../helpers/emojii';
import somedata from '../helpers/some-data';
import Moudal from './modal';
import $ from 'jquery';

const Truc = () => <h1>Je suis là</h1>;

// Stateless React component with passing arguments
const Emojii = (u) =>
<a key="{u.key}" className="list-group-item" href="#{u.item}"><h4>{u.item}</h4></a>;

// Full React State Component
// class Emojii extends Component {
//   render () {
//     return <a key="{this.props.key}" className="list-group-item" href="#{this.props.item}"><h4>{this.props.item}</h4></a>}
// }

class App extends React.Component { 
constructor() {
    super();
    this._onClickButtonToModal = this._onClickButtonToModal.bind(this);
    this.state= {
      etatModal: false,
      users: []
    };
  }
_wherIsthis () {
  const emoj = Array.from(emojii);
  const data = somedata;
  return data.map((x, i) => `${emoj[i]} ${x}`); 
}
_onClickButtonToModal() {
  console.log('click');
  this.setState( {etatModal: true} );
}
componentDidMount() {
  console.log('App Component Did Mount');
  this.serverRequest = $.get('https://jsonplaceholder.typicode.com/users', function (result) {
    // var lastGist = result[0];
    //   console.log(lastGist.name, lastGist.email);
    this.setState({
      users: result
    });
    }.bind(this));
 
  // https://jsonplaceholder.typicode.com/users
  // this.setState( {etatModal: true} );
}

componentWillUnmountn() {
    this.serverRequest.abort();
}

render () {
  /*console.log(this._wherIsthis());*/
  return (
<div className="container">
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">6cured</a>
      </Navbar.Brand>
      <Navbar.Brand>
        <a href="#">board</a>
      </Navbar.Brand>
      <Navbar.Brand>
        <a href="#">configs</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
     </Navbar.Collapse>
  </Navbar>
  <h2>React Router Header 💋</h2>
  <ButtonToolbar>
    <Button>Load Users</Button>
    <Button bsStyle="primary">Load Posts</Button>
    <Button bsStyle="success" onClick={this._onClickButtonToModal}>
        Modal Box
        <Moudal etat={this.state.etatModal} />
      </Button>
  </ButtonToolbar>
  <hr />
  <div className="list-group table-of-contents">
    { this._wherIsthis().map((x, i) =>
    <Emojii key={i} item={x}/>) }
  </div>
</div>
  );
}}



export default App;

