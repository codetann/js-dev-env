import "whatwg-fetch";
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

export function getUsers() {
  return get("users");
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

// Fetch data based an url entered
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const req = new Request(baseUrl + url, {
    method: "DELETE",
  });

  return fetch(req).then(onSuccess, onError);
}

// Runs on get(url) success
function onSuccess(res) {
  return res.json();
}

// Runs on get(url) error
function onError(error) {
  console.log(error);
}
