import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';

const emo = '🎩🔗🎀🌀🍒';

// Stateless React component with passing arguments
const Emojii = (u) => {
  const source = 'https://dl-web.dropbox.com/account_photo/get/dbid%3AAACy4RmldiCCUfBxDukimehnzk0QyQXu5oU?vers=1445944963336';
return (<div>
  <Image src={source} width={19} height={19} circle />
  &nbsp;&nbsp;&nbsp;{u.item}
</div>);

};

class NavBar extends Component { 
constructor(props, context) {
  super(props);
  this._handleSelectInvert = this._handleSelectInvert.bind(this);
  this._switchTheme = this._switchTheme.bind(this);
  this.state = {
    invert: false
  };
}

_switchTheme() {
  this.context.themeSwitcher.load('yeti');
}

_handleSelectInvert(event, eventKey) {
  this.setState(
    {invert: !this.state.invert}
  );
}

  render() {
  const image = 'https://dl-web.dropbox.com/account_photo/get/dbid%3AAACy4RmldiCCUfBxDukimehnzk0QyQXu5oU?vers=1445944963336';

  const inNavDropTitle = <span><i className="fa fa-toggle-on fa-fw"></i> Preferences</span>;
  
    return (
      <Navbar inverse={this.state.invert} fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">🍒 Cerised</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard fa-fw"></i> DashBoard</NavItem>
            <NavItem eventKey={2} href="#">
            <i className="fa fa-file fa-fw"></i> Configs</NavItem>
            <NavDropdown eventKey={2.1} title={inNavDropTitle} id="basic-nav-dropdown">
              <MenuItem eventKey={2.09}>
              <i className="fa fa-toggle-off fa-fw"></i> Global Settings</MenuItem>
              
              <MenuItem eventKey={2.10} onSelect={this._switchTheme} >
              <i className="fa fa-th fa-fw"></i> Change Theme</MenuItem>

              <MenuItem eventKey={2.11} onSelect={this._handleSelectInvert}>
              <i className="fa fa-lightbulb-o fa-fw"></i> Invert NavBar</MenuItem>
            </NavDropdown>  
          </Nav>

          <Nav pullRight>
            <NavDropdown eventKey={3} title={Emojii({item: 'Jean-Marc RENAUDIN'})} noCaret id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>
              <Image src={image} width={24} height={24} circle /> Edit Profile</MenuItem>
              <MenuItem eventKey={3.2}><i className="fa fa-user-plus fa-fw"></i> Manage Users</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.0}><i className="fa fa-sign-out fa-fw"></i> Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavBar.contextTypes = {
  themeSwitcher: React.PropTypes.object,
  themes: React.PropTypes.array,
  currentTheme: React.PropTypes.string
};

export default NavBar;