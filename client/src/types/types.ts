type UserType = {
  id: number;
  email: string;
  login: string;
  password: boolean;
  phone_number: number;
  role: string;
  specialization?: string;
  experience?: string;
  img?: string;
  createdAt: Date;
  updatedAt: Date;
};

type PatientType = {
  id: number;
  user_id: number;
  name: string;
  last_name: string;
  age: number;
  gender: string;
  health_issues: string;
  analyses_result: string;
  treatment: string;
  createdAt: Date;
  updatedAt: Date;
};

export type { UserType, PatientType };


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

  export type authUserType = {
    user: string;
  }
  export type roleUserType = {
    role: string,
  }

  export type doctorType = {
    email: string,
    login: string,
    password: string,
    role: string,
    phone_number: string,
    doctor_id: number, 
    specialization: string,
    experience: number,
    img: string, 
  }


  export type UserSliceType = {
    user: userType;
    loggedUser: userLoggedType;
    authUser: authUserType;
    isLoading: boolean;
    roleUser: roleUserType
    userDoc: doctorType
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
