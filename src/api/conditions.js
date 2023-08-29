import axios from "axios"

export const getDataApi = async (page,pageSize) => {
    try {
        const res = await axios.get(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=${page}&pageSize=${pageSize}`)

        return res?.data;
    } catch (error) {
        console.log(error)
    }
}