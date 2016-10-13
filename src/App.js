import React, {Component} from 'react';
import { Button, ButtonToolbar, Navbar } from 'react-bootstrap';
import emojii from '../emojii';

const Truc = () => <h1>Je suis là 💋</h1>;

// Stateless React component with passing arguments
const Emojii = (u) =>
<a key="{u.key}" className="list-group-item" href="#{u.item}"><h4>{u.item}</h4></a>

// Full React State Component
// class Emojii extends Component {
//   render () {
//     return <a key="{this.props.key}" className="list-group-item" href="#{this.props.item}"><h4>{this.props.item}</h4></a>}
// }


class App extends Component { 

_wherIsthis () {return Array.from(emojii);}

render () {
  /*console.log(this._wherIsthis());*/

  return (
    <div className="container">
    <Navbar>
    </Navbar>
    <h2>React Router Header</h2>
    <ButtonToolbar>
      <Button>Default</Button>
      <Button bsStyle="primary">Primary</Button>
    </ButtonToolbar>
    <Truc />
    <div className="list-group table-of-contents">
      { 
        this._wherIsthis().map((x, i) => <Emojii key={i} item={x}/>)
      }
    </div>
  </div>
  )
}}



export default App;

