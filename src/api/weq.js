import axios from './../utils/axios'
export function loadWeq(data) {
    return axios({
        url: '/ssm/weq/list',
        method: 'post',
        data,
    })
}
