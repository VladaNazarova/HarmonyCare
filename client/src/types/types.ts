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
