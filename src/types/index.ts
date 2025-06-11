export interface DataRow {
  [key: string]: number;
}

export interface FilterState {
  [key: string]: number[];
}

export interface FilterOption {
  id: number;
  text: string;
}

export interface TableState {
  data: DataRow[];
  filteredData: DataRow[];
  currentPage: number;
  rowsPerPage: number;
  totalPages: number;
}

export interface FilterProps {
  columnName: string;
  options: FilterOption[];
  selectedValues: number[];
  onFilterChange: (columnName: string, values: number[]) => void;
  disabled?: boolean;
} 