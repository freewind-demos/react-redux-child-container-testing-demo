import React from 'react';

class Item extends React.Component {
  render() {
    const {name, onDeleteFruit} = this.props;
    return <span>{name}
      <button title="delete" onClick={() => onDeleteFruit(name)}>x</button>
      </span>;
  }
}

export default Item;
