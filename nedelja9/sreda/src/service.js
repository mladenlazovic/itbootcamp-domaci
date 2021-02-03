import axios from 'axios'

const BASE_URL = 'https://api.spacexdata.com/v4'
const LAUNCHES_PAST = '/launches/past'

export const getPastLaunches = () => axios.get(`${BASE_URL}${LAUNCHES_PAST}`)