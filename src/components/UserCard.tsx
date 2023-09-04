import Link from "next/link";
import React from "react";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserCard: React.FC<IUser> = (user) => {
  return (
    <Link
      href={`/users/${user.id}`}
      className=" bg-gray-300 p-4 flex flex-col gap-2"
    >
      <div className="font-bold">{user.id}</div>
      <div className="text-xl font-bold">{user.name}</div>
      <div className="text-xl font-bold">{user.username}</div>
      <div className="text-md ">{user.email}</div>
      <div>
        <h3 className="font-bold">Address</h3>
        <div>{user.address.street}</div>
        <div>{user.address.suite}</div>
        <div>{user.address.city}</div>
        <div>{user.address.zipcode}</div>
        <h3 className="font-bold">Coords</h3>
        <div>
          <div>Lat: {user.address.geo.lat}</div>
          <div>Lat: {user.address.geo.lng}</div>
        </div>
      </div>
      <div>
        <span className="font-bold">Phone</span> {user.phone}
      </div>
      <div>
        <span className="font-bold">Website</span> {user.website}
      </div>
      <div>
        <h3 className="font-bold">Company</h3>
        <div>{user.company.name}</div>
        <div>{user.company.catchPhrase}</div>
        <div>{user.company.bs}</div>
      </div>
    </Link>
  );
};

export default UserCard;
