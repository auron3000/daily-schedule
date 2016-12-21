import React from 'react';
import {render} from 'react-dom';
import TableComponent from './TableComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>From index.jsx</p>
        <TableComponent/>
      </div>
    );
  }
}
TableComponent.defaultProps = { row0: "World", row1: " ", row2: " ", row3: " ", row4: " ", row5: " ", row6: " ", row7: " "};
render(<App/>, document.getElementById('app'));
