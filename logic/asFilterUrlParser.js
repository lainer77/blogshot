// filterable 파라미터에 대한 설명
//
// 저장소 : Session Storage
// first = 1 => area
// first = 2 => department
// first = 4 => universitie

// first = 3 => area, department
// first = 5 => area, universitie
// first = 6 => department, universitie

// first = 7 => area, department, universitie

// area second length 2
// department second length (1+2 = depth + id)
//  depth1=1, depth2=2
// universitie second length 3

// example
// first | second------------------------- => area, department, universitie
//         area  department  universitie
//         id    depth1 id    id
// 7       11    1      11    111          => 711111111
// first | second------------------------- => area, department
//         area  department
//         id    depth2 id
// 3       11    2      11                 => 311211
// first | second------------------------- => area, universitie
//         area  universitie
//         id    id
// 5       11    111                       => 511111
// first | second------------------------- => universitie
//         universitie
//         id
// 4       111                             => 4111

export const AREA_FIRST = 1;
export const DEPARTMENT_FIRST = 2;
export const DEPARTMENT_FIRST_DEPTH_1 = 1;
export const DEPARTMENT_FIRST_DEPTH_2 = 2;
export const UNIVERSITIE_FIRST = 4;

export const AREA_LENGTH = 2;
export const DEPARTMENT_LENGTH = 3;
export const UNIVERSITIE_LENGTH = 3;

export function paramsToUrl(
    state = {
        area: null,
        department: { depth1: null, depth2: null },
        universitie: null
    },
    areas = [],
    departments = [],
    universities = []
) {
    let filterable = "";
    let first = 0;
    let second = "";
    let is_error = false;

    if (state.area && areas) {
        first = AREA_FIRST;
        second += areas.find(x => x.name == state.area).id;
    }

    if (state.department.depth2 && departments) {
        first += DEPARTMENT_FIRST;
        second += DEPARTMENT_FIRST_DEPTH_2;
        second += String(
            departments.depth2.find(x => x.name == state.department.depth2)
                .parent_id
        ).padStart(DEPARTMENT_LENGTH, 0);
    } else if (state.department.depth1 && departments) {
        first += DEPARTMENT_FIRST;
        second += DEPARTMENT_FIRST_DEPTH_1;
        second += String(
            departments.depth1.find(x => x.name == state.department.depth1).id
        ).padStart(DEPARTMENT_LENGTH, 0);
    }

    if (state.universitie && universities) {
        first += UNIVERSITIE_FIRST;
        let medical_universities = universities.find(
            x => x.name == state.universitie
        );
        if (medical_universities && medical_universities.id)
            second += String(medical_universities.id).padStart(
                UNIVERSITIE_LENGTH,
                0
            );
        else {
            is_error = true;
        }
    }

    filterable = first + second;

    if (!is_error && filterable) {
        return filterable;
    } else {
        return undefined;
    }
}

export const urlToParams = (filterable, getState) => {
    let _filterable = filterable;
    let first = parseInt(filterable[0]);
    _filterable = _filterable.slice(1);
    let params = {};

    if (Boolean(first & 1)) {
        let areas_id = parseInt(_filterable.slice(0, 2));

        params.areas_id = areas_id;

        _filterable = _filterable.slice(2);
    }
    if (Boolean(first & 2)) {
        let depth = parseInt(_filterable[0]);
        let departments_id = parseInt(_filterable.slice(1, 4));

        if (Boolean(depth & 2)) {
            params.departments_id = departments_id;
        } else if (Boolean(depth & 1)) {
            params.departments_id = departments_id;
        }

        _filterable = _filterable.slice(4);
    }
    if (Boolean(first & 4)) {
        let universities_id = parseInt(_filterable.slice(0, 3));

        params.universities_id = universities_id;
    }

    return params;
};

export function getFileNameFromUrl(url) {
    let filename = url.substring(url.lastIndexOf("/") + 1);

    return filename;
}

export function getUuidFromFileName(url) {
    let filename = getFileNameFromUrl(url);
    let uuid = filename.split(".")[0];

    return uuid;
}
