import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialRegisterPatientState = {
  registerData: {
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    password: "",
    gender: "",
  },
};

const RegisterPatientData = createSlice({
  name: "registerPatient",
  initialState: initialRegisterPatientState,
  reducers: {
    updateRegisterData(state, action) {
      //always accepts an array
      action.payload.forEach((el) => {
        const key = Object.keys(el);
        const value = Object.values(el);
        state.registerData = {
          ...state.registerData,
          [key]: value[0],
        };
      });
      console.log(state.registerData)
    },
  },
});

export const registerPatientActions = RegisterPatientData.actions;

const store = configureStore({
  reducer: {
    registerPatient: RegisterPatientData.reducer,
  },
});

export default store;
