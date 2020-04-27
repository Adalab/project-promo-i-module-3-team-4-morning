const PostDataToApi = (value) => {
  return fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(value),
    headers: { 'content-type': 'application/json' },
  }).then(function (resp) {
    return resp.json();
  });
};

export { PostDataToApi };
