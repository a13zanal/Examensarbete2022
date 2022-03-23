import React from 'react';
import { useTable, useSortBy } from 'react-table';

const StatusTable = ({data}) => {

    const columns = React.useMemo( () => [
            {
            Header: 'Rang',
            accessor: '',
            },
            {
            Header: 'Team',
            accessor: 'team',
            },
            {
            Header: 'Starpoints',
            accessor: 'starpoints', 
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable ({columns, data}, useSortBy);

    return(
        <div className='StatusTable'>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps)}> {column.render("Header")} 
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StatusTable;