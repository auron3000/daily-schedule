import React from 'react';
import TableComponent from './TableComponent.jsx';


class StoreComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log("I'm finally here");

  }

  handleClickEvent(ev) {
    //let { value } = ev.target;
    //this.setState({ name: value });
    //cal/ the modal
    console.log("made it to the store");
  }

  render() {
    return (<div>divy</div>);
  }
}

export default StoreComponent;
