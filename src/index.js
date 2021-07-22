import { getUsers } from "./api/userApi";
import "./styles/index.sass";

// Populate table of users via API call
(async () => {
  let data = await getUsers();
  let tableBody = "";

  data.forEach((user) => {
    tableBody += `<tr>
      <td><a href='#' data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`;
  });

  global.document.getElementById("users").innerHTML = tableBody;
})();
