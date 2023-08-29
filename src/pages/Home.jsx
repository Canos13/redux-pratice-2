import { useEffect, useState } from "react"
import TableConditions from "../components/TableConditions"
import { useDispatch, useSelector } from "react-redux"
import { setData, setError, setLoading } from "../features/conditions/conditionSlice"
import { getDataApi } from "../api/conditions"
import PaginationComp from "../components/Pagination"

const Home = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const condition = useSelector(state => state.conditions)

    useEffect(()=>{
        const getData = async () => {
            try {
                dispatch(setLoading());
                const data = await getDataApi(page,pageSize);
                dispatch(setData(data));
            } catch (error) {
                dispatch(setError(error.message));
            }
        }

        getData()
    },[dispatch,page,pageSize])

    const changePage = (page,pageSize) => {
        setPage(page);
        setPageSize(pageSize)
    }

    const propsPagination = {
        bgColor:'#fff',
        totalItems:condition?.TotalItems || 0,
        current:page, 
        defaultPageSize:pageSize, 
        onChange:changePage
    }

    return (
        <div>

            <section className="table p-4" >
                <TableConditions />
                <PaginationComp {...propsPagination}  />
            </section>

        </div>
    )
}

export default Home