import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
    this.setState({searchTerm: ""});
  }

  render() {
    return(
      <div>
        <form className='search-form' onSubmit={this.handleSubmit}>
          <input
            className='input'
            placeholder='search...'
            value={this.state.searchTerm}
            onChange={this.handleChange}
            required/>

          <button className='search-button'>Search</button>
        </form>

        <GiphysIndex giphys={this.props.giphys} />
      </div>
    );
  }
}


export default GiphysSearch;
