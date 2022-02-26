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
  cart: [];
}

interface IRegister {
  payload: IAuthUser;
}
