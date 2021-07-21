import "whatwg-fetch";

export function getUsers() {
  return get("users");
}

// Fetch data based an url entered
function get(url) {
  return fetch(url).then(onSuccess, onError);
}

// Runs on get(url) success
function onSuccess(res) {
  return res.json();
}

// Runs on get(url) error
function onError(error) {
  console.log(error);
}
