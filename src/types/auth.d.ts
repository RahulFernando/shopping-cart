interface ILoginReducer {
  loginData: {
    loading: boolean;
    data: any;
    error: any;
  };
}

interface IAuthUser {
  email: string;
  password: string;
}
