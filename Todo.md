# Finance app with Dashboard

- used to manage company's finances
- consists of lots of KPIs and used to keep track of finances
- use of real machine learning for revenue and predictions
- use vercel for frontend, fly.io for backend and server for deployment

> frontend

- MUI for component library, datagrid for tables
- TS for language
- vite for starter app

- redux toolkit query for api calls
- hero icons for icons
- react router for navigation

> backend

- nodejs for runtime, express for backend framework and mongoose for database

> machine learning

- use regression-js for machine learning

## Installation

Run `npm create vite@latest` to get started

- next install dependencies `npm i react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid` to install our state management library.
Redux toolkit is a wrapper around redux for easy development, react router for navigation. MUI for UI.
- then install dev dependencies to exclude them in the final build `npm i -D @types/react-dom`
- next install these for the final build `npm i -D eslint eslint-config-react-app`. These will add default settings for eslint so we don't reconfigure the settings
- install `npm i -D @types/node` used for absolution paths instead of relative paths and writing cleaner paths during imports

> 57.50