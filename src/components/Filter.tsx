import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
import styled from 'styled-components';
import type { FilterProps } from '../types';

const FilterContainer = styled.div`
  margin: 10px;
  width: 200px;
`;

const FilterLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Filter: React.FC<FilterProps> = ({
  columnName,
  options,
  selectedValues,
  onFilterChange,
  disabled = false,
}) => {
  const handleSelectionChange = (selectedList: any[]) => {
    onFilterChange(
      columnName,
      selectedList.map((item) => item.id)
    );
  };

  return (
    <FilterContainer>
      <FilterLabel>{columnName}</FilterLabel>
      <Multiselect
        options={options}
        selectedValues={options.filter((option) => selectedValues.includes(option.id))}
        onSelect={handleSelectionChange}
        onRemove={handleSelectionChange}
        displayValue="text"
        showCheckbox={true}
        disable={disabled}
        placeholder={`Select ${columnName}`}
        style={{
          chips: {
            background: '#007bff',
          },
          searchBox: {
            border: '1px solid #ddd',
            borderRadius: '4px',
          },
        }}
      />
    </FilterContainer>
  );
};

export default Filter; 