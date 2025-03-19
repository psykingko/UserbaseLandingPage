import { debounce } from "lodash";

export const debounceSearch =
  debounce((query, users, setFilteredUsers) => {
    if (!query) {
      setFilteredUsers(users);
      return;
    }

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  },
  300);
