<<<<<<< HEAD
# Filter-Optimization-Dashboard
=======
# Business Intelligence Dashboard

A React TypeScript application that implements a business intelligence dashboard with advanced filtering capabilities. The dashboard allows users to filter data based on multiple criteria, with dynamic filter options that update based on the selected values.

## Features

- Data table with pagination (100 rows per page)
- Multi-select filters for each column
- Dynamic filter options that update based on selected values
- Search functionality in filters
- Responsive design
- TypeScript support
- Unit tests

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit for state management
- Styled Components for styling
- Jest and React Testing Library for testing
- Vite for build tooling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Run tests:
   ```bash
   npm test
   ```

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── Dashboard.tsx   # Main dashboard component
  │   ├── Filter.tsx      # Filter component
  │   ├── DataTable.tsx   # Data table component
  │   └── __tests__/      # Component tests
  ├── store/             # Redux store
  │   ├── index.ts       # Store configuration
  │   ├── filterSlice.ts # Filter state management
  │   └── tableSlice.ts  # Table state management
  ├── types/             # TypeScript type definitions
  └── App.tsx            # Root component
```

## Performance Considerations

- The application is optimized for performance with large datasets
- Filter operations are memoized to prevent unnecessary recalculations
- Pagination is implemented to handle large datasets efficiently
- Redux state updates are optimized to minimize re-renders

## Testing

The project includes unit tests for components and state management. Run tests using:

```bash
npm test
```

For watch mode:

```bash
npm run test:watch
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
>>>>>>> 4180867 (Initial commit)
