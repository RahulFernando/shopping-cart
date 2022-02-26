interface IAuthReducer {
  loginData: {
    loading: boolean;
    data: any;
    error: any;
  };
  registerData: {
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

interface IRegister {
  payload: IAuthUser;
}
