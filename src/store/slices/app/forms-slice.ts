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
        openModal: (state, {payload: { type, isEditing }}: PayloadAction<{type: string, isEditing: boolean}>) => {
            state.isOpen = true;
            state.type = type;
            state.isEditing = isEditing;
        },
        setFormData: (state, {payload}: PayloadAction<any>) => {
            state.data = payload
        },
        closeModal: (state, {payload}: PayloadAction<void>) => {
            state.isOpen = false;
            state.isEditing = false;
            state.type = ""
        }
    }
})

 export const { openModal, setFormData, closeModal } = slice.actions

const modalFormHandlingReducer = slice.reducer;
export default modalFormHandlingReducer;