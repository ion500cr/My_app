import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
      <User
        src="https://www.artsfon.com/pic/201506/1680x1050/artsfon.com-70228.jpg"
        alt="prince"
        name="Harry_the_prince"
      />
      <div className="users__block">
        <User
          src="https://www.artsfon.com/pic/201506/1680x1050/artsfon.com-70228.jpg"
          alt="prince"
          name="Harry_the_prince"
          min
        />
        <User
          src="https://www.artsfon.com/pic/201506/1680x1050/artsfon.com-70228.jpg"
          alt="prince"
          name="Harry_the_prince"
          min
        />
        <User
          src="https://www.artsfon.com/pic/201506/1680x1050/artsfon.com-70228.jpg"
          alt="prince"
          name="Harry_the_prince"
          min
        />
        <User
          src="https://www.artsfon.com/pic/201506/1680x1050/artsfon.com-70228.jpg"
          alt="prince"
          name="Harry_the_prince"
          min
        />
      </div>
    </div>
  )
}
