import React from 'react';

const Users = ({ users, things, favorites }) => {
  console.log('things ', things);

  return (
    <div>
      <ul>
        {users.map(user => {
          let userIdx = user.id;
          return (
            <li key={userIdx}>
              {user.name}
              <ul>
                {favorites
                  .filter(fav => fav.userId === user.id)
                  .map(userFav => (
                    <li key={userFav.id}>
                      {things
                        .filter(thing => thing.id === userFav.thingId)
                        .map(favThing => {
                          return favThing.name;
                        })}
                      <span> (ranked: {userFav.rank})</span>
                    </li>
                  ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
