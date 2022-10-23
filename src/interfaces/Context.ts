export interface Props {
  children: React.ReactNode;
}

export interface User {
    userName: string;
    password: string;
}

export interface Auth {
  user: string | null | {};
  isAuthenticated: boolean;
}
