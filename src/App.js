import React from 'react';
import { Button, ButtonToolbar, Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import emojii from '../helpers/emojii';
import somedata from '../helpers/some-data';
import Moudal from './modal';
import $ from 'jquery';
import NavBar from './NavBar';
import { ThemeSwitcher } from 'react-bootstrap-theme-switcher';
import { ThemeChooser } from 'react-bootstrap-theme-switcher';


const Truc = () => <h1>Je suis là</h1>;

// Stateless React component with passing arguments
const Emojii = (u) => {
  const source = 'https://dl-web.dropbox.com/account_photo/get/dbid%3AAACy4RmldiCCUfBxDukimehnzk0QyQXu5oU?vers=1445944963336';
// return (<p key="{u.key}" href="#{u.item}">
//   <Image src={source} width={32} height={32} circle />&nbsp;{u.item}
// </p>);
// return (<div>
//   <Image src={source} width={32} height={32} circle />&nbsp;{u.item}
// </div>);

return (<div>
  <Image src={source} width={32} height={32} circle />
  &nbsp;&nbsp;&nbsp;{u.item}
</div>);

};

class App extends React.Component { 
constructor() {
    super();
    this._onClickButtonToModal = this._onClickButtonToModal.bind(this);
    this._loadUsers = this._loadUsers.bind(this);
    this.state= {
      etatModal: false,
      users: []
    };
  }
_loadUsers() {
  // const emoj = Array.from(emojii);
  // const data = somedata;
  this.serverRequest = $.get('https://jsonplaceholder.typicode.com/users', function (result) {
    // var lastGist = result[0];
    //   console.log(lastGist.name, lastGist.email);
    this.setState({
      users: result
    });
    }.bind(this));
  // return data.map((x, i) => `${emoj[i]} ${x}`); 
}
_onClickButtonToModal() {
  console.log('click');
  this.setState( {etatModal: true} );
}
componentDidMount() {
  console.log('App Component Did Mount');
  // this.setState( {etatModal: true} );
}
componentWillUnmountn() {
    this.serverRequest.abort();
}



render () {
  /*console.log(this._wherIsthis());*/
  return (
    <ThemeSwitcher defaultTheme="yeti" themePath="/themes" themes={['default', 'yeti', 'united', 'paper']} storeThemeKey="theme">
      <div>
        <NavBar/>
        <div className="container" >
          <h3>React Router Header 💋</h3>
          <ButtonToolbar>
            <Button onClick={this._loadUsers}>Load Users</Button>
            <Button bsStyle="primary">Load Posts</Button>
            <Button bsStyle="success" onClick={this._onClickButtonToModal}>Modal Box
            <Moudal etat={this.state.etatModal} /></Button>
          </ButtonToolbar>
            <ThemeChooser />                            
          <hr />
          <div className="table-of-contents">
            { this.state.users.map((x, i) =>
            <Emojii key={i} item={x.name}/>) }
          </div>
        </div>
      </div>
    </ThemeSwitcher>
  );
}
}

export default App;

// Full React State Component
// class Emojii extends Component {
//   render () {
//     return <a key="{this.props.key}" className="list-group-item" href="#{this.props.item}"><h4>{this.props.item}</h4></a>}
// }

