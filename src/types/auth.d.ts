interface ILoginReducer {
  loginData: {
    loading: boolean;
    data: any;
    error: any;
  };
}

interface IAuthUser {
  id?: Number;
  email: string;
  phone_number: Number;
  password: string;
}
