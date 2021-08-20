import React, { Component } from "react";
import itemStore from "./components/itemStore.js";
import Item from "./components/Item.js";

class ListOfItems extends Component {
  constructor() {
    super();
    this.state = {
      itemList: itemStore,
      allNoneCheckbox: { id: -1, text: "All/None", checked: false }
    };
  }

  handleChange = id => {
    const { itemList, allNoneCheckbox } = this.state;


    if (id === -1) {
      allNoneCheckbox.checked = !allNoneCheckbox.checked;
      var updatedItemList = itemList.map(item => {
        item.checked = allNoneCheckbox.checked;
        return item;
      })
      this.setState({ itemList: updatedItemList, allNoneCheckbox: allNoneCheckbox});
    } else {
      allNoneCheckbox.checked=false;
      this.setState({
        itemList: itemList.map(item => {
          if (item.id === id)
            return {
              ...item,
              checked: !item.checked
            };
          return item;
        }), allNoneCheckbox: allNoneCheckbox
      });
    }

  };
  render() {
    const todoItemComponents = this.state.itemList.map(item => {
      return (
        <Item key={item.id} item={item} handleChange={this.handleChange} />
      );
    });
    return (
      <div className="App">

        <Item key={-1} item={this.state.allNoneCheckbox} handleChange={this.handleChange} />
        <div>{todoItemComponents}</div>
      </div>
    );
  }
}

export default ListOfItems;