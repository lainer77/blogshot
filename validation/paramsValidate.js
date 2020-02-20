let params = {};
let parmasValidate = {
    category: false,
    email: false,
    contents: false
};
let validateAll = false;
Object.keys(param).map(x => {
    switch (x) {
        case "category":
            params[x] = param[x];
            parmasValidate[x] = true;
            return;
        case "email":
            params[x] = param[x];
            parmasValidate[x] = true;
            return;
        case "phone":
            params[x] = param[x];
            return;
        case "title":
            params[x] = param[x];
            return;
        case "contents":
            params[x] = param[x];
            parmasValidate[x] = true;
            return;
        default:
            break;
    }
});
Object.keys(parmasValidate).forEach(x => {
    if (x) {
        validateAll = true;
    }
});
