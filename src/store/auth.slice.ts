import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface User {
  id: number;
  nom: string;
  email: string;
  githubUrl: string;
}

export interface AuthState {
  user: User;
  // userData: UserData
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: {
    id: 0,
    nom: '',
    email: '',
    githubUrl: '',
  },
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
};

export const createAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
    setIsFirstTime: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
    },
    setTokens: (state, { payload }) => {
      state.accessToken = payload;
    },
  },
});

export const { setIsFirstTime, setIsAuthenticated, setUser, setLogout, setTokens } =
  createAuthSlice.actions;

export default createAuthSlice.reducer;
