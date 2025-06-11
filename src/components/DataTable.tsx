import React from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import type { DataRow } from '../types';

const TableContainer = styled.div`
  margin: 20px;
  height: 600px;
  overflow: auto;
`;

interface CustomDataTableProps {
  data: DataRow[];
  columns: any[];
  currentPage: number;
  totalRows: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
}

const CustomDataTable: React.FC<CustomDataTableProps> = ({
  data,
  columns,
  currentPage,
  totalRows,
  rowsPerPage,
  onPageChange,
}) => {
  return (
    <TableContainer>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        paginationPerPage={rowsPerPage}
        onChangePage={onPageChange}
        highlightOnHover
        pointerOnHover
        dense
        fixedHeader
        fixedHeaderScrollHeight="500px"
      />
    </TableContainer>
  );
};

export default CustomDataTable; 