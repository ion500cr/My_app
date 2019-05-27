import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return(
      <div className="left">
        <Post src="https://s1.1zoom.ru/big3/827/384495-svetik.jpg" alt="nature"/>
        <Post src="https://img3.goodfon.com/original/5616x3744/a/a8/waterfall-sea-lake-deep-4161.jpg" alt="nature"/>
      </div>
    )
  }
}
