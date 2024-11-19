"use client";

import styles from './FormComponent.module.css';
import { UserProvider, useUser } from "../../context/UserContext";

type User = {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
};

const UserList = () => {
  const { filteredUsers, searchQuery, setSearchQuery } = useUser();

  return (
    <div className={styles.userListContainer}>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.userRow}>
        {filteredUsers.map((user: User) => (
          <div key={user.id} className={styles.userCard}>
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className={styles.avatar}
            />
            <span>{user.first_name} {user.last_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FormComponent = () => {
  return (
    <form className={styles.formContainer}>
      <UserProvider>
        <UserList />
      </UserProvider>
    </form>
  );
};

export default FormComponent;
