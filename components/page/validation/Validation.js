export const passwordValidation = {
    minLength: {
        value: 8,
        message: 'Minimum 8 symbol'
    },
    maxLength: {
        value: 16,
        message: 'Maximum 16 symbol'
    }
}

export const emailValidation = {
    pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid email'
    }
}

export const requiredValidation = {
    required: "Please fill out all fields."
};