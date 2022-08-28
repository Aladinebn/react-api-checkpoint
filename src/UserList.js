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
      <div className="text-3xl p-5">🤠 {name}</div>
      <div>👤 username: {username}</div>
      <div>📧 email: {email}</div>
      <div className="p-5">
        🏠 address:
        <div className="grid grid-cols-1 gap-2 p-5">
          <div>♠️ street: {address.street}</div>
          <div>♥️ suite: {address.suite}</div>
          <div>♦️ city: {address.city}</div>

          <div>
            🗺️ geography:
            <div>latitude: {address.geo.lat}</div>
            <div>longitude: {address.geo.lng}</div>
          </div>
          <div>♣️ zipcode: {address.zipcode}</div>
        </div>
      </div>
      <div>☎️ phone: {phone}</div>
      <div>🌐 website: {website}</div>
      <div>
        🏦 company:
        <div className="grid grid-cols-1 gap-2 p-5">
          <div>✨ {company.name}</div>
          <div>👷 {company.catchPhrase}</div>
          <div>💯 {company.bs}</div>
        </div>
      </div>
    </div>
  );
}
