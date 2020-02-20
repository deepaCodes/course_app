import { handleResponse, handleError } from "./apiUtils";
//process.env.API_URL variable is configured in webpack.config.dev.js
const baseUrl = process.env.API_URL + "/courses/";

export function getCourses() {
    //fetch defaults to "GET" verb
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function saveCourse(course) {
    return fetch(baseUrl + (course.id || ""), {
        method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(course)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteCourse(courseId) {
    return fetch(baseUrl + courseId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}
