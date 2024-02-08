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

  export type ServiceTypes = {
    id: number;
    name: string;
    description: string;
    promo: string;
    logo: string;
  };
  export type ServicesType = Array<ServiceTypes>;

  export type ServicesSliceType = {
    services: ServicesType;
    isLoading: boolean;
  };