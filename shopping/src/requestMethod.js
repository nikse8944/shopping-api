import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjM5YmQ2ZjM4YWE4NWU2ZTY3MzlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjY1Mzc2NywiZXhwIjoxNjQ2OTEyOTY3fQ.R4cN-D2GcYwG6ZgxrxONtr5aHguWA55ke9n4kGFqINA"

export const publicRequest = axios.create({
    baseURL: BASE_URL,

})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})


