"use client";
import { IUser } from "@/components/UserCard";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const getUser = async (id: string) => {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let user = await res.json();
  return user;
};

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser | null>();
  useEffect(() => {
    async function loadUser() {
      setUser(await getUser(id.toString()));
    }
    loadUser();
  }, []);

  return (
    <div className=" bg-gray-300 m-4 p-4 flex flex-col gap-2">
      <div className="font-bold">{user?.id}</div>
      <div className="text-xl font-bold">{user?.name}</div>
      <div className="text-xl font-bold">{user?.username}</div>
      <div className="text-md ">{user?.email}</div>
      <div>
        <h3 className="font-bold">Address</h3>
        <div>{user?.address.street}</div>
        <div>{user?.address.suite}</div>
        <div>{user?.address.city}</div>
        <div>{user?.address.zipcode}</div>
        <h3 className="font-bold">Coords</h3>
        <div>
          <div>Lat: {user?.address.geo.lat}</div>
          <div>Lat: {user?.address.geo.lng}</div>
        </div>
      </div>
      <div>
        <span className="font-bold">Phone</span> {user?.phone}
      </div>
      <div>
        <span className="font-bold">Website</span> {user?.website}
      </div>
      <div>
        <h3 className="font-bold">Company</h3>
        <div>{user?.company.name}</div>
        <div>{user?.company.catchPhrase}</div>
        <div>{user?.company.bs}</div>
      </div>
    </div>
  );
};

export default User;
