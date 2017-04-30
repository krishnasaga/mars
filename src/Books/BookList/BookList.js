import React from 'react'
import Book from './Book.js'

export default class BookList extends React.Component {
  render(){
    return (
	  <div className="mdl-grid">{ this.props.list.map(  ( book , index ) => {
	     return <Book name={ book.name } image={ book.image } key={ index } />; } ) }</div>
	);
  }
}
