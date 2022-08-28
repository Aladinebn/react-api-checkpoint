import axios from "axios";
import React from "react";
import UserList from "./UserList";

function App() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);

  const userData = user?.map((item) => {
    return (
      <UserList
        key={item.id}
        id={item.id}
        name={item.name}
        username={item.username}
        email={item.email}
        address={item.address}
        phone={item.phone}
        website={item.website}
        company={item.company}
      />
    );
  });

  return (
    <div className="p-9">
      <div className="grid grid-cols-2 gap-10 text-center">{userData}</div>
    </div>
  );
}

export default App;
