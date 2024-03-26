import { User } from "firebase/auth";

// You might need to adjust the User type according to what you actually plan to store in the context
export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
