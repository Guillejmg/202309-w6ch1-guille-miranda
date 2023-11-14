import { configureStore, ThunkAction, Action, AnyAction } from "@reduxjs/toolkit"
import counterReducer from "../../../../features/components/counter/counterSlice"
import phoneReducer from "../../../../features/components/phone/slices/phone.slice"

export const phoneStore = configureStore({
  reducer: {
    phone:  phoneReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
function (state: unknown, action: AnyAction): unknown {
  throw new Error("Function not implemented.")
}

