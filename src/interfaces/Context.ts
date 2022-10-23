export interface Props {
  children: React.ReactNode;
}

export interface User {
    userName: string | null;
    password: string | null;
}

export interface Auth {
  user: string | null;
  isAuthenticated: boolean;
}
