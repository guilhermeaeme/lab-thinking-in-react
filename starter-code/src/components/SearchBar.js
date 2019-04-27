import React, { Component, Fragment } from 'react';

class Search extends Component {
  state = {
    search: '',
    stock: false
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
    
    this.props.handleSearch(value);
  }
  
  handleCheckbox = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: event.target.checked });

    this.props.handleFilter(event.target.checked);
  }
  
  render() {
    return (
        <Fragment>
          <div className="form-group">
              <label htmlFor="search">Search</label>
              <input
                  className="form-control"
                  type="text"
                  id="search"
                  name="search"
                  value={this.state.search}
                  onChange={e => this.handleChange(e)}
              />
          </div>

          <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="stock" name="stock" checked={this.state.stock} onChange={(e) => this.handleCheckbox(e)} />
                <label class="custom-control-label" for="stock">Only show products on stock</label>
              </div>
          </div>
        </Fragment>
    );
  }
}

export default Search;
