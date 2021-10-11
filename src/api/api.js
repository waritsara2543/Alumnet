var axios = require('axios');
var qs = require('qs');
import {mainapi} from './currentapi'
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