import React from 'react';

class PopupComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log("EV = " + this.props.ev);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(data) {
    console.log("hit the submit function in PopupComponent");

    //let { value } = data;
    //this.setState({ name: value });
    //cal/ the modal
  }

  render() {
    return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input ref="inputText" />
        <input type="submit" />
        <button onClick = {this.props.closeDialog}>Cancel</button>
      </form>
    </div>
    );
  }
}

export default PopupComponent;
