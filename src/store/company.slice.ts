import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Entreprise {
  id: number;
  nom: string;
  logo: string;
  phone: string;
  latitude: number;
  longitude: number;
}

interface CompanyState {
  companies: Entreprise[];
  selectedCompany?: Entreprise | '';
}

const initialState: CompanyState = {
  companies: [],
  selectedCompany: '',
};

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompanies: (state, { payload }: PayloadAction<Entreprise[]>) => {
      state.companies = payload;
    },
    setSelectedCompany: (state, { payload }) => {
      state.selectedCompany = payload;
    },
  },
});

export const { setCompanies, setSelectedCompany } = companySlice.actions;

export default companySlice.reducer;
