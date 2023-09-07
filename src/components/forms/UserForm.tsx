import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setFormData } from '../../store/slices/app/forms-slice';

const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
};

const validationSchema = yup.object({
    name: yup.string()
        .required('Name is required')
        .min(3),
    email: yup.string()
        .required('Email is required')
        .email('Enter a valid email'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password should be of minimum 8 characters length')
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[!@#$%^&*()\-_=+{};:,<.>]/, getCharacterValidationError("special caracters")),
    role: yup.string()
        .required('Role is required'),
    phone: yup.string()
        .required('Phone is required')
        .matches(/^01[0125][0-9]{8}$/, { message: 'Enter a valid phone number' })
})


const UserForm = () => {
    const sub = (val : any)=>{
        console.log(val);
        
    }

    const { values, isValid, errors, touched , initialStatus , handleBlur, handleChange, resetForm, dirty, validateForm } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            role: '',
            phone: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {sub(values);},
        isInitialValid: false,
        validateOnChange: false
    });

    const {isOpen, data} = useAppSelector(state => state.modalForm);

    const dispatch = useAppDispatch();

    // console.log(initialStatus);
    

    // console.log(dirty);
    
    const isFormValid = async () => {
        const valus = await validateForm()
        if( Object.keys(valus).length === 0){
            console.log(true);
            
        }
    }

    if(isValid && Object.keys(touched).length === 5){

        console.log(5555);
        // console.log(isFormValid());
        // isFormValid()
        
        // dispatch(setFormData(values));
    }


    return (
        <form noValidate>

            <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="Name"
                type="text"
                id="name"
                // autoFocus
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
            />

            <FormControl fullWidth sx={{
                mt: 2,
                mb: 1
            }}
                error={touched.role && Boolean(errors.role)}
            >
                <InputLabel htmlFor="role">Role</InputLabel>
                <Select
                    label="Role"
                    required
                    name="role"
                    id="role"
                    value={values.role}
                    onBlur={handleBlur}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="owner">Owner</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                </Select>
                <FormHelperText>{touched.role && errors.role}</FormHelperText>
            </FormControl>

            <TextField
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Phone"
                id="phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                inputProps={{
                    inputMode: 'numeric',
                    pattern: '[0-9]*'
                }}
            />
            {/* <Button
                type="button"
                variant="contained"
                onClick={isFormIsValid}
            >
                Add
            </Button> */}
        </form>
    )
}

export default memo(UserForm)