import React from "react";
import styled from "styled-components";

const UserCard = styled.div`
  border-radius: 5px;
  border: 1px solid green;

  h1 {
    font-weight: bold;
  }
  h2 {
    color: red;
  }
`;

const User = ({ name, age }) => (
  <UserCard>
    <h1>{name}</h1>
    <h2>{age}</h2>
  </UserCard>
);

const UserList = () => {
  const users = [
    {
      name: "Vinicius",
      age: "23"
    }
  ];

  return (
    <>
      {users.map((user, key) => (
        <User age={user.age} name={user.name} />
      ))}
    </>
  );
};

export default UserList;
