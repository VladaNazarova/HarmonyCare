export type userType = {
    email: string;
    login: string;
    password: string;
    phone_number:string;
  };

  export type UserSliceType = {
    user: userType;
    isLoading: boolean;
  }