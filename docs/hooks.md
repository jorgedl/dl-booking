## Hooks

This folder contains custom React hooks used in the DL Booking application. Each hook is designed to encapsulate specific functionality, making the components cleaner and more focused on rendering logic.

### Custom Hooks

#### `useLockedDays`

- **Description**: Generates memoized locked dates based on the property and bookings provided. This helps in managing unavailable dates for bookings.
- **File**: `useLockedDays.ts`

#### `useRangePicker`

- **Description**: Manages the state and logic for the date range picker component, including handling locked dates and ensuring the selected range does not overlap with existing bookings.
- **File**: `useRangePicker.ts`
- **Test**: `useRangePicker.test.ts`

### API Hooks

Hooks in the `/api` subfolder leverage `react-query` for data fetching.

#### `useAutoComplete`

- **Description**: Provides autocomplete functionality for search inputs, fetching property data based on the query and date range parameters.
- **File**: `api/useAutoComplete.ts`

#### `useProperties`

- **Description**: Fetches property data based on the provided start and end dates.
- **File**: `api/useProperties.ts`

#### `useProperty`

- **Description**: Fetches detailed data for a single property based on the property ID.
- **File**: `api/useProperty.ts`

### General Information

Each custom hook follows the standard React hook naming convention and is designed to be reusable and composable. The hooks also contain necessary error handling to ensure robustness. By using as few third-party components as possible, the project aims to share logic and create common front-end behaviors, ensuring more control over the codebase and allowing for better customization and maintenance.
