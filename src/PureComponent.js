import React from "react";
import PropTypes from "prop-types";

class ItemList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    );
  }
}

class ItemListApp extends Component {
  state = {
    items: []
  };
  nextItemId = 0;

  makeItem() {
    return {
      id: this.nextItemId++,
      value: Math.random()
    };
  }

  addItemImmutably = () => {
    this.setState({
      items: [...this.state.items, this.makeItem()]
    });
  };

  addItemMutably = () => {
    this.state.items.push(this.makeItem());
    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <div>
        <button onClick={this.addItemImmutably}>
          Add item immutably (good)
        </button>
        <button onClick={this.addItemMutably}>Add item mutably (bad)</button>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}
