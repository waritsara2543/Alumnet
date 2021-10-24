import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
var qs = require('qs');
import { devapi, herokuapi,projectapi } from './currentapi'
const api = axios.create({ baseURL: projectapi }, {
    headers: {
        'Content-Type': 'application/json'
    },
})
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
export async function getTimelineById(student_id) {
    console.log(student_id);
    console.log("timelineById")
    let res = await api.get(`/timeline/${student_id}`);
    return res.data.results
}

export async function getPersonInformation(student_id) {
    // console.log(email);
    let res = await api.get(`/student/infomation/${student_id}`);
    return res.data.results
}

export async function getStudentById(email) {
    // console.log(email);
    let res = await api.get(`/student/${email}`);
    return res.data.results
}
export function test(email) {
    console.log(email);
}
export async function confirmEmaill(email, student_id) {
    // var axios = require('axios');
    // var data = JSON.stringify({
    //   "email": email
    // });

    // var config = {
    //   method: 'put',
    //   url: `${mainapi}/student/updateemail/${student_id}`,
    //   headers: { 
    //     'Content-Type': 'application/json'
    //   },
    //   data : data
    // };

    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    var data = {
        email: email
    };
    try {
        const res = await api.put(`/student/updateemail/${student_id}`, data)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export async function createinformation(student_id, contact_url) {
    var data = {
        student_id: student_id,
        contact_url: contact_url
    };
    try {
        const res = await api.post(`/student_contact`, data)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export async function updateinformation(epigram, status, student_id) {
    var data = {
        epigram: epigram,
        status: status
    };
    try {
        const res = await api.put(`/student/epigram_status/${student_id}`, data)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export async function createcompany(workplace_name, position, student_id) {
    var data = {
        name: workplace_name,
        position: position,
        student_id: student_id
    }
    try {
        let res = await api.post(`/student/company`, data);
        return res
    }
    catch (err) {
        console.log(err);
    }

}

export async function updateprofile(image,student_id) {
    var data = {
        image_profile:image
    }
    try {
        const res = await api.put(`/student/image_profile/${student_id}`, data)
        return res
    }
    catch (err) {
        console.log(err);
    }
}
export async function getProfileById(student_id) {
    // console.log(email);
    let res = await api.get(`/student/profile/${student_id}`);
    return res.data.results
}