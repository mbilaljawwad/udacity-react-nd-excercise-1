import React from 'react';


class FavoriteMovies extends React.Component {
  
  render () {
    const {users, profiles, movies} = this.props;
    return (
      <ol>
      {profiles.map(profile => {
       const str = `${users[profile.userID].name}'s favorite movie is ${movies[profile.favoriteMovieID].name}`;
      	return (
       	<li key={profile.id}>
      		<div>
      			<p>{str}</p>
      		</div>
      	</li>
       )
      })}
      </ol>
    )
  }
  
}


export default FavoriteMovies;