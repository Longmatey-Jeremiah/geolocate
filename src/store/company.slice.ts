import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Entreprise {
  id: number;
  nom: string;
  logo: string;
  phone: string;
}

const initialState = {
  entreprise: {
    id: 0,
    nom: '',
    logo: '',
    phone: '',
  },
};

export const createCompanySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setEntrepriseId: (state, { payload }) => {
      state.entreprise.id = payload;
    },
  },
});

export const { setEntrepriseId } = createCompanySlice.actions;

export default createCompanySlice.reducer;
