import React from 'react'
import BookList from './BookList/BookList.js'

export default class Books extends React.Component {
  render(){
    return (
	  <div><BookList list={[
	   { name: 'Robert C Martin', image: 'http://butunclebob.com/files/images/BobAtRails.jpg' },
	   { name: 'Robert C Martin', image: 'http://butunclebob.com/files/images/BobAtRails.jpg' },
	   { name: 'Robert C Martin', image: 'http://butunclebob.com/files/images/BobAtRails.jpg' },
	   { name: 'Robert C Martin', image: 'http://butunclebob.com/files/images/BobAtRails.jpg' },
	   { name: 'Robert C Martin', image: 'http://butunclebob.com/files/images/BobAtRails.jpg' }
	  ]} /></div>
	);
  }
}
