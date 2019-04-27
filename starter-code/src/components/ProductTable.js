import React, { Component } from 'react';
import ProductRow from './ProductRow';

class FilterableProductTable extends Component {
  render() {
    return (
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map((product, index) => 
                <ProductRow key={index} product={product} />
              )
            }
          </tbody>
        </table>
    );
  }
}

export default FilterableProductTable;
