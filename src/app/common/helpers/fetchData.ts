import defaultsDeep from 'lodash-es/defaultsDeep';

export const fetchData = (url: string, options: any = {}) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    return fetch(API_URL + url, defaultsDeep(options, {
        headers,
    }));
};
