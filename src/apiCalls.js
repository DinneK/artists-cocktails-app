const getArtistData = () => {
  return fetch(
    `https://artists-cocktails-api.herokuapp.com/api/v1/artists`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  });
};

export { getArtistData };
