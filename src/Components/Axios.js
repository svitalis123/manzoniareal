import axios from 'axios'

const instance=axios.create({
    baseURL:'http://localhost:5001/mazonia-3addc/us-central1/api'
})
export default instance