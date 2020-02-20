const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

const validateEmail = email => {
    if (exptext.test(email) == false) {
        return false;
    }
    return true;
};
export default validateEmail;
