import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
        return(
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">
              {book.title}
          </li>
        );
      });
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    );
  }
};

/* anything returned from this func will end up as props on BookList container */
function mapStateToProps(state) {
  /* whatever is returned will show up as props inside BookList */
  return {
    books: state.books
  };
};

function mapDispatchToProps(dispatch) {
  /* whenever selectBook is called, the result should be passed to all reducers */
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

/* promote BookList from a Component to a container - it must know about new
  dispatch method, selectBook. Make it available as a prop */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
