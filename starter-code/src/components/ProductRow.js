import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    return (
        <tr>
            <td className={(!this.props.product.stocked) ? 'text-danger' : ''}>
                {this.props.product.name}
            </td>
            <td>
                {this.props.product.price}
            </td>
        </tr>
    );
  }
}

export default ProductRow;
