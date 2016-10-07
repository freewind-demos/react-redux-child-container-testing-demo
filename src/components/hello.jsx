import React from 'react';
import ItemContainer from '../containers/item-container';

class Hello extends React.Component {
  render() {
    const {fruit} = this.props;
    return <div>
      <h1>Hello, I like:</h1>
      <ul>
        {
          fruit.map(name => <ItemContainer key={name} name={name}/>)
        }
      </ul>
    </div>
  }
}

export default Hello;
