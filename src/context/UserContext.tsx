import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define types for the user data
interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

// Define the shape of the context
interface UserContextType {
  users: User[];
  filteredUsers: User[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch user data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const data = await response.json();
        setUsers(data.data);
        setFilteredUsers(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Filter users based on search query
  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  return (
    <UserContext.Provider value={{ users, filteredUsers, searchQuery, setSearchQuery }}>
      {children}
    </UserContext.Provider>
  );
};
