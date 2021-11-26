import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
var qs = require('qs');
import { devapi, herokuapi,projectapi } from './currentapi'
const api = axios.create({ baseURL: projectapi}, {
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
    let res = await api.get(`/student/timeline/${student_id}`);
    return res.data.results
}
export async function getFeedById(major_id,faculty_id,campus_id,graduate_year) {
    let res = await api.get(`/student/feed/${major_id}/${faculty_id}/${campus_id}/${graduate_year}`);
    return res.data.results
}
export async function getClassdirectoryById(major_id,faculty_id,campus_id,graduate_year) {
    let res = await api.get(`/student/classdirectory/${major_id}/${faculty_id}/${campus_id}/${graduate_year}`);
    return res.data.results
}

export async function getDetailById(email) {
    let res = await api.get(`/student/detail/${email}`);
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

export async function createinformation(student_id, contact_type,contact_url) {
    var data = {
        student_id: student_id,
        contact_type:contact_type,
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

export async function createstudentgooglesheet(data) {
    console.log(data);
    try {
        const res = await api.post(`/student`, data)
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

export async function createworkplace(workplace_name, position, student_id,start_work ) {
    var data = {
        name: workplace_name,
        position: position,
        student_id: student_id,
        start_work:start_work,
    }
    try {
        let res = await api.post(`/student/workplace`, data);
        return res
    }
    catch (err) {
        console.log(err);
    }

}

export async function createworkplacebefore(workplace_name, position, student_id,start_work,finish_work ) {
    var data = {
        name: workplace_name,
        position: position,
        student_id: student_id,
        start_work:start_work,
        finish_work:finish_work
    }
    try {
        let res = await api.post(`/student/workplacebefore`, data);
        return res
    }
    catch (err) {
        console.log(err);
    }

}



export async function updateprofile(image_profile,student_id) {
    var data = {
        image_profile:image_profile
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

export async function getadminbyemail(email) {
    // console.log(email);
    let res = await api.get(`/admin/${email}`);
    return res.data.results
}

// ADMIN //
export async function createEvent(title,details,image,start_activity,finish_activity,faculty_id) {
    var data = {
        title: title,
        content: details,
        image:image,
        start_activity: start_activity,
        finish_activity: finish_activity,
        faculty_id: faculty_id,
    }
    try {
        const res = await api.post(`/admin/createevent/`, data)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export async function updateEvent(title,details,image,start_activity,finish_activity,faculty_id,public_relation_id) {
    var data = {
        title: title,
        content: details,
        image:image,
        start_activity: start_activity,
        finish_activity: finish_activity,
        faculty_id: faculty_id,
    }
    try {
        const res = await api.put(`/admin/updateevent/${public_relation_id}`, data)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export async function deleteEvent(public_relation_id) {
    try {
        const res = await api.delete(`/admin/deleteevent/${public_relation_id}`)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export async function getEvent(faculty_id) {
    try {
        const res = await api.get(`/admin/getevent/${faculty_id}`)
        return res.data.results
    }
    catch (err) {
        console.log(err);
    }
}

export async function getEventBypublicid(faculty_id,public_relation_id) {
    try {
        const res = await api.get(`/admin/geteventbyid/${faculty_id}/${public_relation_id}`)
        return res.data.results
    }
    catch (err) {
        console.log(err);
    }
}


export async function getSearch(firstname,lastname) {
    let res = await api.get(`/student/search/${firstname}/${lastname}`);
    return res.data.results
}




export async function getDatainGoogleSheets() {
    let res = await api.get(`https://sheets.googleapis.com/v4/spreadsheets/1L0p43e9RCRS_0sjcz7xz35Uoi5Ev2PxklGUGHeLPSlA/values/sheet1!A2:L300/?key=AIzaSyCXRNRo1tvekH4YLwrw2kKnqaHlpAwz7TA`);
    return res.data.values
}

export async function updateCurrentJob(student_id) {
    try {
        const res = await api.put(`/student/currentjob/${student_id}`)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export async function getStudentContactByid(student_id) {
    let res = await api.get(`/student/studentcontact/${student_id}`);
    return res.data.results
}

export async function getStudentlattlongByid(student_id) {
    let res = await api.get(`/student/latlongbyid/${student_id}`);
    return res.data.results
}
export async function getStudentlattlongAll(student_id) {
    let res = await api.get(`/student/latlongall/${student_id}`);
    return res.data.results
}
export async function getSearchGuess(firstname,lastname) {
    let res = await api.get(`/search/${firstname}/${lastname}`);
    return res.data.results
}
export async function getLatLongForAdmin(faculty_id) {
    let res = await api.get(`/admin/latlong/${faculty_id}`);
    return res.data.results
}

export async function deleteStudentContact (student_contact_id) {
    try {
        const res = await api.delete(`/student/studentcontact/${student_contact_id}`)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export async function getLocationByid(postcode) {
    let res = await api.get(`/student/locationbyapi/${postcode}`);
    return res.data.results
}

export async function createAddressByid(student_id, tumbon, amphone, province, postcode, country) {
    data= {
        tumbon:tumbon,
        amphone:amphone,
        province:province,
        postcode:postcode,
        country:country
    }
    try {
        let res = await api.post(`/student/addressbyid/${student_id}`,data);
        return res
    }
    catch (err) {
        console.log(err);
    }

}

export async function updateLatLong(lat,long,student_id) {
    try {
        const res = await api.put(`/student/latlong/${lat}/${long}/${student_id}`)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

////////////////////// Dashboard //////////////////////

export async function getStudentUsedsystem() {
    let res = await api.get(`/admin/dashboard/usedsystem`);
    return res.data.results
}

export async function getStudentWork(faculty_id) {
    let res = await api.get(`/admin/dashboard/userwork/${faculty_id}`);
    return res.data.results
}

export async function getStudentAddress(faculty_id) {
    let res = await api.get(`/admin/dashboard/useraddress/${faculty_id}`);
    return res.data.results
}

export async function getStudentGraduateyear(faculty_id) {
    let res = await api.get(`/admin/dashboard/graduateyear/${faculty_id}`);
    return res.data.results
}
export async function getStudentWorkByPosition(faculty_id) {
    let res = await api.get(`/admin/dashboard/workposition/${faculty_id}`);
    return res.data.results
}


