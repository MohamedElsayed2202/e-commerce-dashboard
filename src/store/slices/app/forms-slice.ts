import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ModalFormHandling } from "../../../interfaces/interfaces"

const initialState: ModalFormHandling = {
    type: "",
    isOpen: false,
    isEditing: false,
    isValid: false,
    data: undefined
}

const slice = createSlice({
    name: "modal-form-handling",
    initialState,
    reducers: {
        toggleFormModalOpen: (state, {payload}: PayloadAction<void>) => {
            state.isOpen = !state.isOpen;
        },
        setFormData: (state, {payload}: PayloadAction<any>) => {
            state.data = payload
        }
    }
})

 export const { toggleFormModalOpen, setFormData } = slice.actions

const modalFormHandlingReducer = slice.reducer;
export default modalFormHandlingReducer;