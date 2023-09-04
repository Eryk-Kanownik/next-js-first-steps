"use client";
import UserCard, { IUser } from "@/components/UserCard";
import React, { useEffect, useState } from "react";

const getUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();
  return users;
};

const Users = () => {
  const [users, setUsers] = useState<IUser[] | Array<any>>([]);
  useEffect(() => {
    async function loadData() {
      setUsers(await getUsers());
    }
    loadData();
  }, []);

  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className=" text-xl font-bold text-center">Users</h1>
      {users?.map((user: IUser, key: number) => (
        <UserCard
          key={key}
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          address={user.address}
          phone={user.phone}
          website={user.website}
          company={user.company}
        />
      ))}
    </main>
  );
};

export default Users;
