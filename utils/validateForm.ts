export interface IFormData {
    [key: string]: string | undefined;
    name?: string;
    email?: string;
    subject?: string;
    description?: string;
}

const nameReg = /^[^0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
const emailReg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
const minDescriptionLength = 30;

export const validateField = (
    inputName: string,
    inputValue: string
): string => {
    inputName = inputName.trim();
    inputValue = inputValue.trim();

    if (!inputValue)
        return `${
            inputName[0].toUpperCase() + inputName.slice(1)
        } cannot be empty.`;

    switch (inputName) {
        case "name":
            if (!nameReg.test(inputValue))
                return "Name cannot contain symbols or numbers.";
            break;
        case "email":
            if (!emailReg.test(inputValue)) return "Invalid email address.";
            break;

        case "subject":
            break;

        case "description":
            if (inputValue.length < minDescriptionLength)
                return `Description must be at least ${minDescriptionLength} characters long.`;
            break;

        default:
            break;
    }
    return "";
};

const checkFormValidity = (
    formData: IFormData
): { isFormValid: boolean; errors: IFormData } => {
    let validity = true;
    const errors: IFormData = {};
    for (const field in formData) {
        errors[field] = validateField(field, formData[field] || "");
        if (validity && errors[field] !== "") validity = false;
    }

    return { isFormValid: validity, errors };
};

export const trimFormData = (formData: IFormData): IFormData => {
    for (const field in formData) {
        formData[field] = formData[field]?.trim();
    }
    return formData;
};

export default checkFormValidity;
