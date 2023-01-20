import React from 'react';
import AuthDetails from "../firebase/Auth";

function Profile() {
  
  const { user, userSignOut } = AuthDetails();
  return (
    <div>
        <h5>{`Signed In as ${user.email}`}</h5>
        <button onClick={userSignOut}>Sign Out</button>
      </div>
  );
}

export default Profile;