# Finance Dashboard with Machine Learning Predictions

A comprehensive financial dashboard application built with the MERN stack (MongoDB, Express.js, React, Node.js) that provides data visualization and predictive analytics for financial data.

## Features

- **Interactive Dashboard**: Visualize key performance indicators (KPIs) with modern charts and graphs
- **Financial Predictions**: Machine learning-powered predictions for financial metrics
- **Data Management**: View and manage products and transactions
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with Material-UI for a clean, professional look

## Tech Stack

- **Frontend**:

  - React 18
  - TypeScript
  - Vite
  - Material-UI (MUI)
  - Redux Toolkit
  - Recharts
  - React Router

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - CORS for cross-origin requests
  - Helmet for security

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Temkum/finance-with-machine-learning.git
   cd finance-with-machine-learning
   ```

2. **Set up the backend**

   ```bash
   cd server
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `server` directory with the following variables:

   ```
   PORT=5001
   MONGO_URL=your_mongodb_connection_string
   MONGO_DB_NAME=finance_dashboard
   ```

4. **Set up the frontend**

   ```bash
   cd ../client
   npm install
   ```

5. **Start the development servers**
   In the root directory, open two terminal windows:

   Terminal 1 (Backend):

   ```bash
   cd server
   npm run dev
   ```

   Terminal 2 (Frontend):

   ```bash
   cd client
   npm run dev
   ```

6. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Seeding the Database (Optional)

To populate the database with sample data, you can use the provided data files in `server/data/` and the seeding logic in `server/index.js`.

## Available Scripts

### Backend (server)

- `npm run dev`: Start the development server with nodemon

### Frontend (client)

- `npm run dev`: Start the Vite development server
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint

## Project Structure

```
finance-with-machine-learning/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # Source files
│       ├── components/     # Reusable components
│       ├── scenes/         # Page components
│       ├── state/          # Redux store and slices
│       └── App.tsx         # Main application component
└── server/                 # Backend Node.js/Express application
    ├── data/              # Sample data
    ├── models/            # MongoDB models
    ├── routes/            # API routes
    └── index.js           # Server entry point
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
