import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="http://yastart.ru/uploads/posts/2018-09/1537853821_2.jpg"
        alt="Man"
        name="some_cool_man"
      />
      <Palette/>
    </div>
  )
}

export default Profile;
