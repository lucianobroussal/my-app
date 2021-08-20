
import React, { Component } from "react";
import ItemList from "./components/Item.js";
import Services from "./services/services"

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      allNoneCheckbox: { id: -1, text: "All/None", checked: false },
      searchError: false
    };
  }


  handleSearch = async event => {
    var results = await Services.searchGithub(event.target.value).catch(error=> {this.setState({ searchError: true })});
    if (results) {
      var itemList = results.map(item => {
        return { ...item, text: item.login, checked: false }
      });
      this.setState({ itemList })
    }
  }

  handleChange = id => {
    const { itemList, allNoneCheckbox } = this.state;


    if (id === -1) {
      allNoneCheckbox.checked = !allNoneCheckbox.checked;
      var updatedItemList = itemList.map(item => {
        item.checked = allNoneCheckbox.checked;
        return item;
      })
      this.setState({ itemList: updatedItemList, allNoneCheckbox: allNoneCheckbox });
    } else {
      allNoneCheckbox.checked = false;
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
        <ItemList key={item.id} item={item} handleChange={this.handleChange} />
      );
    });
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Search github people"
          onChange={this.handleSearch}
        />
        <span>Item found : {this.state.itemList.length}</span>
        <ItemList key={-1} item={this.state.allNoneCheckbox} handleChange={this.handleChange} />

        {(this.state.searchError === true) &&
          <span>A technical error occured while searching</span>
        }
        <div>{todoItemComponents}</div>
      </div>
    );
  }
}

export default SearchPage;