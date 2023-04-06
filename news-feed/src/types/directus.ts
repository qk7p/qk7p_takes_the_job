export type LoginResponse = {
  status: number;

  data: {
    access_token: string;
    refresh_token: string;
    expires: number;
    nickname: string;
    first_name: string;
  };

  error: string;
};

export type LogoutResponse = {
  status: number;
  error: string;
};

export type RegisterResponse = {
  status: number;
  data: {
    email: string;
  };
  error: string;
};
