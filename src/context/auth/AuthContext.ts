import { createContext } from "react";
import { User } from "../../interfaces/Context";

type AuthContextType = {
    user: string | null | {};
    isAuthenticated: boolean;
    loginUser: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;