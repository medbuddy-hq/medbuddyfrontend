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

const initialMedicationState = {
  medData: {
    name: "Paracetamol",
    start_date: new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    dosage_quantity: "2 tablets",
    daily_dosage: 0,
    total_number_of_dosage: 0, // total number of times the drug should be taken
    treatment: "headache",
    comment:
      "drug should be taken immediately after eating in the morning, afternoon and night",
    dosage_times: ["08:30:00", "15:00:05", "20:00:05"], // the length of this should match 'daily_dosage'
    medicine: {
      name: "Paracetamol",
      manufacturer: "Emzor",
      category: "Adults",
      form: "Tablet",
      strength: "20mg",
      dosage: "2 tablets to be taken three times a day",
    },
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
      console.log(state.registerData);
    },
  },
});

const RegisterMedicationData = createSlice({
  name: "registerMed",
  initialState: initialMedicationState,
  reducers: {
    updateMedicationData(state, action) {
      //always accepts an array
      action.payload.forEach((el) => {
        const key = Object.keys(el);
        const value = Object.values(el);
        state.medData = {
          ...state.medData,
          [key]: value[0],
        };
      });
      const medData = {...state.medData}
      console.log(medData);
    },
    updateArrayData(state, action) {
      //updating the medicine object inside the state object
      action.payload.forEach((el) => {
        const key = Object.keys(el);
        const value = Object.values(el);
        state.medData.medicine = {
          ...state.medData.medicine,
          [key]: value[0],
        };
      });
      const medData = {...state.medData}
      console.log(medData);
    },
    updateTotalDosage(state, action) {
      // dosage text in medicine object is also updated here
      state.medData.total_number_of_dosage = action.payload * state.medData.daily_dosage;
      const text = `${state.medData.medicine.strength} to be taken ${state.medData.daily_dosage} times a day`
      state.medData.medicine.dosage = text
      const medData = {...state.medData}
      console.log(medData);
    },
  },
});

export const registerPatientActions = RegisterPatientData.actions;
export const registerMedicationActions = RegisterMedicationData.actions;

const store = configureStore({
  reducer: {
    registerPatient: RegisterPatientData.reducer,
    registerMedication: RegisterMedicationData.reducer,
  },
});

export default store;
