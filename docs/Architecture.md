
# System Architecture

## Architecture Flow

Frontend (React.js)
        |
      Axios
        |
Backend (Express.js)
        |
 Controllers
        |
 Data Layer

## Components

### Frontend
- Dashboard
- Navbar
- Sidebar
- Revenue Chart
- Transactions Table
- Stat Cards

### Backend
- Routes
- Controllers
- Data Modules

## Data Flow

1. Frontend sends API request.
2. Express route receives request.
3. Controller processes request.
4. Data module returns analytics data.
5. Backend sends JSON response.
6. Frontend updates dashboard.