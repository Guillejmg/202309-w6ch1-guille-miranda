import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NumbersStructure } from "../../../models/numbers";

const initialState: NumbersStructure = {
  one: '',
  two: '',
  three: '',
  four: '',
  five: '',
  six: '',
  seven: '',
  eight: '',
  nine: '',
  cero: '',
  delete:''
}

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers:{
    add:  (state, action: PayloadAction<NumbersStructure>) =>{
      return action.payload;
    },
    delete: (state) => {
      return initialState;
    }
  }
})

export default phoneSlice.reducer
export const phoneActions = phoneSlice.actions
