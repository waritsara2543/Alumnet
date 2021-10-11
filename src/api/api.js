var axios = require('axios');
var qs = require('qs');
import { mainapi, api } from './currentapi'
export function put_workplace_history(data) {
    console.log(data);
    console.log(mainapi);
    let test = {
        workplace_history_id: '3',
        workplace_id: '1',
        student_id: data.student_id,
        position: 'BB',
        start_work: '2021-02-21',
        finish_work: '2022-02-21'
    }
    var data = qs.stringify(test);
    var config = {
        method: 'post',
        url: `${mainapi}/workplace_history`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    console.log(config);
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
export async function getStudentById(email) {
    console.log(email);
    let res = await axios.get(`${api}/student/${email}`);
    return res.data.results
}
export  function test(email) {
    console.log(email);
    
}
export function confirmEmaill(email,student_id) {
    // console.log(email);
    // console.log(mainapi);
    console.log(student_id);
    let insert = {
        student_id: student_id
    }
    var data = qs.stringify(insert);
    var config = {
        method: 'put',
        url: `${mainapi}/confiremd/${email}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    console.log(config);
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}