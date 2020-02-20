const exptext = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;

const validatePhone = phone => {
    if (exptext.test(phone) == false) {
        return false;
    }
    return true;
};

export default validatePhone;
