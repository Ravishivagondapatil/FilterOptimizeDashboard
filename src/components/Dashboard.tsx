import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import type { RootState } from '../store';
import { setData, setFilteredData, setCurrentPage } from '../store/tableSlice';
import { setAvailableOptions, setSelectedFilters } from '../store/filterSlice';
import Filter from './Filter';
import DataTable from './DataTable';
import type { DataRow, FilterOption } from '../types';


const DashboardContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const FiltersContainer = styled.div`
  width: 250px;
  padding: 20px;
  border-right: 1px solid #ddd;
`;

const TableContainer = styled.div`
  flex: 1;
`;

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { data, filteredData, currentPage, rowsPerPage } = useSelector(
    (state: RootState) => state.table
  );
  const { selectedFilters, availableOptions } = useSelector(
    (state: RootState) => state.filters
  );

  // Load data
  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Attempting to load data...');
        const response = await fetch('/data/dataset_small.csv');
        console.log('Response received:', response);
        const csvText = await response.text();
        console.log('CSV text:', csvText);
        const rows = csvText.split('\n').slice(1); // Skip header
        const parsedData: DataRow[] = rows.map((row) => {
          const values = row.split(',');
          const rowData: DataRow = {};
          values.forEach((value, index) => {
            rowData[`mod${index + 3}`] = parseInt(value, 10);
          });
          return rowData;
        });
        console.log('Parsed data:', parsedData);
        dispatch(setData(parsedData));
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, [dispatch]);

  // Add console log for data state
  useEffect(() => {
    console.log('Current data state:', data);
    console.log('Current filtered data:', filteredData);
  }, [data, filteredData]);

  // Update available options when filters change
  useEffect(() => {
    if (data.length === 0) return;

    const columnNames = Object.keys(data[0] as object);
    columnNames.forEach((columnName) => {
      const filteredData = data.filter((row) => {
        return Object.entries(selectedFilters).every(([filterColumn, selectedValues]) => {
          if (filterColumn === columnName) return true;
          if (selectedValues.length === 0) return true;
          const value = row[filterColumn];
          return value !== undefined && selectedValues.includes(value);
        });
      });

      const uniqueValues = Array.from(
        new Set(filteredData.map((row) => row[columnName]))
      )
        .filter((value): value is number => value !== undefined)
        .sort((a, b) => a - b);

      dispatch(
        setAvailableOptions({
          columnName,
          options: uniqueValues,
        })
      );
    });
  }, [data, selectedFilters, dispatch]);

  // Update filtered data when filters change
  useEffect(() => {
    if (data.length === 0) return;

    const filtered = data.filter((row) => {
      return Object.entries(selectedFilters).every(([column, values]) => {
        if (values.length === 0) return true;
        const value = row[column];
        return value !== undefined && values.includes(value);
      });
    });

    dispatch(setFilteredData(filtered));
  }, [data, selectedFilters, dispatch]);

  const columns = useMemo(() => {
    if (data.length === 0) return [];
    return Object.keys(data[0] as object).map((key) => ({
      name: key,
      selector: (row: DataRow) => row[key],
      sortable: true,
    }));
  }, [data]);

  const handleFilterChange = (columnName: string, values: number[]) => {
    dispatch(setSelectedFilters({ columnName, values }));
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getFilterOptions = (columnName: string): FilterOption[] => {
    return (availableOptions[columnName] || []).map((value) => ({
      id: value,
      text: value.toString(),
    }));
  };

  return (
    <DashboardContainer>
      <FiltersContainer>
        {data.length > 0 && Object.keys(data[0] as object).map((columnName) => (
          <Filter
            key={columnName}
            columnName={columnName}
            options={getFilterOptions(columnName)}
            selectedValues={selectedFilters[columnName] || []}
            onFilterChange={handleFilterChange}
          />
        ))}
      </FiltersContainer>
      <TableContainer>
        {data.length > 0 && (
          <DataTable
            data={filteredData.slice(
              (currentPage - 1) * rowsPerPage,
              currentPage * rowsPerPage
            )}
            columns={columns}
            currentPage={currentPage}
            totalRows={filteredData.length}
            rowsPerPage={rowsPerPage}
            onPageChange={handlePageChange}
          />
        )}
      </TableContainer>
    </DashboardContainer>
  );
};

export default Dashboard; 