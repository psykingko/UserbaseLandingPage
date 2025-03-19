import { useState, useEffect } from "react";
import { fetchUsers } from "../api/fetchUsers";
import { debounceSearch } from "../debounce/debounce";

const SearchBar = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setFilteredUsers(data);
    };
    getUsers();
  }, []);

  useEffect(() => {
    debounceSearch(query, users, setFilteredUsers);
  }, [query, users]);

  return (
    <div className="p-4" style={{  borderRadius: "8px" }}>
      <input
        type="text"
        placeholder="Search Users ............"
        className="border text-black outline-none focus:ring-2 border-gray-500  p-2 w-full rounded-md "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ backgroundColor: 'white', opacity: 1 }}
      />
      <ul className="mt-2" >
        {filteredUsers.map((user) => (
          <li key={user.id} className="p-2 border-b" style={{ backgroundColor: "rgba(28, 36, 46, 0.9)", borderRadius: "2px" }}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;