# DL Booking

DL Booking is a React application for managing property bookings. Users can create, read, update, and delete bookings, ensuring that no bookings overlap. This project uses Vite.js, Typescript, and a range of other libraries for optimal performance and maintainability.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Additional Documentation](#additional-documentation)
- [License](#license)

## Features

- Create, read, update, and delete bookings
- Prevent overlapping bookings
- Validate booking start and end dates
- Responsive design for desktop and mobile
- Enhanced UI/UX for better user experience
- Global state management
- Comprehensive testing

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/jorgedl/dl-booking.git
   ```
2. Navigate to the project directory:
   ```sh
   cd dl-booking
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.

## Development

### Scripts

- `npm run setup`: Install Playwright for end-to-end testing
- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run serve`: Preview the production build
- `npm run lint`: Run TypeScript and ESLint checks
- `npm run lint:fix`: Fix ESLint issues

### Technologies Used

- **React**: UI library
- **Vite.js**: Build tool
- **Typescript**: Typed JavaScript
- **Styled Components**: Component-level styling
- **TanStack React Router**: Router library for managing routes
- **React Query**: Data fetching and caching
- **Date-fns**: Date utility library
- **Playwright**: End-to-end testing
- **Vitest**: Unit testing

### Design Philosophy

In this project, I aimed to use as few third-party components as possible. The goal was to share logic and create common front-end behaviors within the application. This approach ensures more control over the codebase and allows for better customization and maintenance.

## Testing

### Running Tests

Before running tests, ensure you have set up the environment:

```sh
npm run setup
```

- To run unit and component tests:
  ```sh
  npm run test
  ```
- To run end-to-end tests:
  ```sh
  npm run test:e2e
  ```
- To view the end-to-end test report:
  ```sh
  npm run test:e2e:report
  ```

### Test Coverage

Ensure all critical functionalities are covered, including booking creation, updating, deletion, and overlap validation.

## Folder Structure

```
.
├── assets
├── components
│   ├── AutoComplete
│   ├── Button
│   ├── Header
│   ├── Input
│   ├── Map
│   ├── Properties
│   ├── Property
│   ├── RangePicker
│   ├── ReservationDetails
│   ├── Search
├── helpers
├── hooks
│   ├── api
├── lib
├── mock
├── pages
│   ├── Book
│   ├── Home
│   ├── Reservations
├── providers
├── reducers
├── routes
│   ├── book
├── types
├── App.tsx
├── index.tsx
```

## Additional Documentation

- [Hooks](./hooks/README.md)
- [Global Styles](./providers/README.md)
