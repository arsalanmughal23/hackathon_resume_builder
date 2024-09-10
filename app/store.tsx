import { configureStore, createSlice } from "@reduxjs/toolkit";
import PersoanlInfoDataType from "@/app/interfaces/PersonalInfo"

const initialState:PersoanlInfoDataType = {
    username: "John Doe",
    email: "johndoe@gmail.com",
    contact: "03150000000",
    address: "Karachi, Pakistan",
    linkedIn: "https://www.linkedin.com/in/arsalan-mughal-671a8a179",
    portfolio: "https://arsalanmughal23.github.io/portfolio"
}

const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        updatePersonalInfoData: (state, action) => {
            return { ...state, ...action.payload};
        }
    },
})

export const { updatePersonalInfoData } = personalInfoSlice.actions

export const store = configureStore({
    reducer: {
        personalInfo: personalInfoSlice.reducer
    }
});
