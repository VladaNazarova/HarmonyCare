export type userType = {
    email: string;
    login: string;
    password: string;
    phone_number:string;
  };

  export type userLoggedType = {
    email: string;
    password: string;
  };

  export type UserSliceType = {
    user: userType;
    loggedUser: userLoggedType;
    isLoading: boolean;
  }