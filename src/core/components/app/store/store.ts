import { configureStore, ThunkAction, Action, AnyAction } from "@reduxjs/toolkit"
import counterReducer from "../../../../features/components/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
function phoneReducer(state: unknown, action: AnyAction): unknown {
  throw new Error("Function not implemented.")
}

