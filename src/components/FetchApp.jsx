import React from "react";
import { useFetch } from "../hooks/useFetch";

export const FetchApp = () => {
  const { data, isLoading, errors } = useFetch();

  return (
    <>
      <h1>Aplicacion de Hook: </h1>
      <hr />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">id</th>
            <td>name</td>
            <td>email</td>
            <td>website</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
