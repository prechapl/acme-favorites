import React from 'react';

const Users = ({ users, things, favorites, match }) => {
  console.log(things);

  return (
    <ul>
      {users.map(user => {
        let userIdx = user.id;
        return <li key={userIdx}>{user.name}</li>;
      })}
    </ul>
  );
};

export default Users;
