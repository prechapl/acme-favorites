import React from 'react';

const Things = ({ things, favorites, users }) => {
  return (
    <div>
      <ul>
        {things.map(thing => {
          let thingIdx = thing.id;
          return (
            <li key={thingIdx}>
              {thing.name}
              <ul>
                {favorites
                  .filter(fav => fav.thingId === thingIdx)
                  .map(thingFav => (
                    <li key={thingFav.id}>
                      favorited by:
                      {users
                        .filter(user => user.id === thingFav.userId)
                        .map(favUser => (
                          <span key={favUser.id}>{favUser.name}</span>
                        ))}
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

export default Things;
