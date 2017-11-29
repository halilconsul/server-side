import React from 'react';
import './SearchBar.scss';

const ENTER_KEY = 13;

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { inputText: '' };
  }

  componentDidMount() {
    this.inputField.focus();
  }

  handleInputChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleOptionSelect(e) {
    this.props.onOptionSelect(e.target.value);
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      this.handleMoviesSearch();
    }
  }

  handleMoviesSearch() {
    if (this.state.inputText) {
      this.props.onMovieFind(this.state.inputText);
      this.clearInputField();
    }
  }

  clearInputField() {
    this.setState({ inputText: '' });
  }

  renderShearchField() {
	  return (
      <input
        type="text"
        value={this.state.inputText}
        className="Searchbar__input"
        onChange={this.handleInputChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
        ref={c => this.inputField = c }
      />
	  );
  }

  renderConfBlock() {
	  const buttonTitleStyle = this.props.option === 'title' ? 'Searchbar__btn_active' : '';
	  const buttonDirectorStyle = this.props.option === 'director' ? 'Searchbar__btn_active' : '';
	  return (
      <div className="Searchbar__conf">
        <div className="Searchbar__block Searchbar__block_black">
          <p className="Searchbar__text">Search by</p>
          <input
            type="submit"
            value="title"
            className={`Searchbar__btn Searchbar__btn_md ${buttonTitleStyle}`}
            onClick={this.handleOptionSelect.bind(this)}
          />
          <input
            type="submit"
            value="director"
            className={`Searchbar__btn Searchbar__btn_md ${buttonDirectorStyle}`}
            onClick={this.handleOptionSelect.bind(this)}
          />
          </div>
          <div className="Searchbar__block">
            <button
              className="Searchbar__btn Searchbar__btn_lg Searchbar__btn_red"
              onClick={this.handleMoviesSearch.bind(this)}>
            Search
            </button>
        </div>
      </div>
	  );
  }

  render() {
	return (
      <div className="SearchBar">
        <div className="SearchBar__finder">
          <h2 className="SearchBar__text">Find your movie</h2>
          <div className="Searchbar__inputField">
	            { this.renderShearchField() }
          </div>
          { this.renderConfBlock() }
        </div>
      </div>
    );
  }
}

SearchBar.PropTypes = {
	onOptionSelect: React.PropTypes.func,
	onMovieFind: React.PropTypes.func,
	option: React.PropTypes.string
};

export default SearchBar;
