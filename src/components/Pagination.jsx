
import { Pagination } from 'antd';
import PropTypes from 'prop-types';

const PaginationComp = props => {
    const { totalItems, onChange, current, defaultPageSize, bgColor } = props;

    return (
        <div 
            className='d-flex justify-content-center mb-1' 
            style={{ backgroundColor: bgColor || '#F0F2F5' }}
        >
            <Pagination
                total={totalItems || 0}
                showTotal={total => `Total ${total} elementos`}
                defaultPageSize={defaultPageSize || 10}
                pageSizeOptions={['10','25','35']}
                defaultCurrent={1}
                current={current}
                onChange={onChange}
            />
        </div>
    );
}

PaginationComp.propTypes = {
    totalItems: PropTypes.number, // Total de registros
    onChange: PropTypes.func.isRequired,     // Eventos onChange(page, pageSize)
    current: PropTypes.number.isRequired,    // Página actual
    defaultPageSize: PropTypes.number, // Número de registros que obtiene por default4
    bgColor: PropTypes.string
}

export default PaginationComp;