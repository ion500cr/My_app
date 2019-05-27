import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return(
      <div className="post">
        <User
          src="https://www.artsfon.com/pic/201506/1680x1050/artsfon.com-70228.jpg"
          alt="prince"
          name="Harry_the_prince"
          min
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          Some account
        </div>
        <div className="post__descr">
          Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Использовало вскоре предупреждал силуэт безопасную дал однажды своих путь! Однажды.
        </div>
      </div>
    )
  }
}
