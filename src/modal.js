import React, {Component} from 'react';
import {Popover, Tooltip, Button, Modal, OverlayTrigger} from 'react-bootstrap';

   const popover = (
      <Popover id="modal-popover" title="🐔 infos">
        c'est ici le cri du "cocorico"'
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        cot-cot-codec
      </Tooltip>
    );

class Moudal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.etat);
    this.state = { showModal: this.props.etat };
    this._close = this._close.bind(this);
  }
  componentWillReceiveProps() {
    this.setState({ showModal: this.props.etat });
  }
  _close() {
    this.setState({ showModal: false });
  }
  _open() {
    this.setState({ showModal: true });
  }
     
// <Modal show={this.state.showModal} onHide={this._close}>
//          <Modal.Header closeButton>
  render() {
    return (
      <div>
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this._close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Moudal;


