import React from "react";

export default function UserList({
  name,
  username,
  address,
  email,
  phone,
  website,
  company,
}) {
  return (
    <div className="bg-cardColor shadow-2xl rounded-lg p-10">
      <div className="text-3xl p-5">π€  {name}</div>
      <div>π€ username: {username}</div>
      <div>π§ email: {email}</div>
      <div className="p-5">
        π  address:
        <div className="grid grid-cols-1 gap-2 p-5">
          <div>β οΈ street: {address.street}</div>
          <div>β₯οΈ suite: {address.suite}</div>
          <div>β¦οΈ city: {address.city}</div>

          <div>
            πΊοΈ geography:
            <div>latitude: {address.geo.lat}</div>
            <div>longitude: {address.geo.lng}</div>
          </div>
          <div>β£οΈ zipcode: {address.zipcode}</div>
        </div>
      </div>
      <div>βοΈ phone: {phone}</div>
      <div>π website: {website}</div>
      <div>
        π¦ company:
        <div className="grid grid-cols-1 gap-2 p-5">
          <div>β¨ {company.name}</div>
          <div>π· {company.catchPhrase}</div>
          <div>π― {company.bs}</div>
        </div>
      </div>
    </div>
  );
}
