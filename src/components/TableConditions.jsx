
import moment from "moment/moment";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux"

const TableConditions =  () => {
    const stateConditions =  useSelector(state => state.conditions);

    return (
        <Table striped bordered hover>
            <thead>
                <tr className="text-center">
                    <th>_id</th>
                    <th>cityid</th>
                    <th>name</th>
                    <th>state</th>
                    <th>probabilityofprecip</th>
                    <th>relative humidity</th>
                    <th>Last report time</th>
                </tr>
            </thead>
            <tbody>
                {
                    stateConditions?.data?.map( condition =>
                        <tr key={condition._id} className="text-center">
                            <th>{condition._id}</th>
                            <th>{condition.cityid}</th>
                            <th>{condition.name}</th>
                            <th>{condition.state}</th>
                            <th>{condition.probabilityofprecip}</th>
                            <th>{condition.relativehumidity}</th>
                            <th>{moment(condition.lastreporttime).format('YYYY/MM/DD')}</th>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default TableConditions