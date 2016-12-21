import React from 'react';
//import PopupComponent from './PopupComponent.jsx';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent(ev) {
    //let { value } = ev.target;
    //this.setState({ name: value });
    console.log('The link was clicked.');
    console.log(ev);//target = correlating what was clicked
    //Pass the row number to update teh proper prop value and start the PopupComponent
    //<StoreComponent ref={(storeComponent) => { this._storeComponent = storeComponent; }} />
    //<StoreComponent ref={(storeComponent) => {storeComponent.handleClickEvent(ev);}} />
    //this._storeComponent.handleClickEvent(ev);
    //<StoreComponent handleClickEvent={ev}/>
//    PopupComponent.defaultProps = { row: ev};
    //<PopupComponent />


  }

  render() {
    return (
      <table>
        <tbody>
          <tr onClick={()=>this.onClickEvent("0")}>
            <td>9:00-10:00</td>
            <td>{this.props.row0}</td>
          </tr>
          <tr onClick={()=>this.onClickEvent("1")}>
            <td>10:00-11:00</td>
            <td>{this.props.row1}</td>
          </tr>
          <tr onClick={()=>this.onClickEvent("2")}>
            <td>11:00-12:00</td>
            <td>{this.props.row2}</td>
          </tr>
          <tr onClick={()=>this.onClickEvent("3")}>
            <td>12:00-1:00</td>
            <td>{this.props.row3}</td>
          </tr>
          <tr onClick={()=>this.onClickEvent("4")}>
            <td>1:00-2:00</td>
            <td>{this.props.row4}</td>
          </tr>
          <tr onClick={()=>this.onClickEvent("5")}>
            <td>2:00-3:00</td>
            <td>{this.props.row5}</td>
          </tr>
          <tr onClick={()=>this.onClickEvent("6")}>
            <td>3:00-4:00</td>
            <td>{this.props.row6}</td>
          </tr>
          <tr onClick={()=>this.onClickEvent("7")}>
            <td>4:00-5:00</td>
            <td>{this.props.row7}</td>
          </tr>
      </tbody>
    </table>
    );
  }
}

export default TableComponent;
