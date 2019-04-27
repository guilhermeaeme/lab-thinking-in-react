import React, { Component, Fragment } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class IronStore extends Component {
  state = {
    products: this.props.products,
    productsAll: this.props.products,
    search: '',
    stock: false
  }

  handleSearch(search) {
    this.setState({
      search
    }, this.applyFilter);
  }

  handleFilter(stock) {
    this.setState({
      stock
    }, this.applyFilter);
  }

  applyFilter() {
    let productsFiltered = [...this.state.productsAll];

    productsFiltered = productsFiltered.filter((item) => {
      return (
        (!this.state.stock || (!!this.state.stock && item.stocked)) &&
        item.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
    });

    this.setState({
      products: productsFiltered
    });
  }

  render() {
    return (
        <div className="container text-center">
            <h1>IronStore</h1>
            <SearchBar handleSearch={(search) => this.handleSearch(search)} handleFilter={(stock) => this.handleFilter(stock)} />
            <ProductTable products={this.state.products} />
        </div>
    );
  }
}

export default IronStore;
