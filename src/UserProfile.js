import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const user = await response.json();
      setUser(user);
    }
    loadUser();
  }, [userId]);

  if (user.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
      </div>
    ));
  }
  return "Loading...";
}

export default UserProfile;
