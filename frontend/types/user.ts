export type UserType = {
  name?: string;
  jwtToken?: string;
  id?: string;
  mail?: string;
  user: UserType | null;
  setUser: any;
};
