# Employee Management System

A comprehensive employee management system built with AngularJS for the frontend, Spring Boot for the backend, and PostgreSQL as the database. This system provides a user-friendly interface for managing employees and includes role-based access control with JWT-based authentication.

## Features
- **CRUD Operations**: Create, Read, Update, and Delete employees.
- **Role-Based Access Control**:
  - Admin: Access to all features, including managing employees and viewing reports.
  - Employee: Restricted access to their profile and relevant data.
- **Authentication**: Secure login and registration with JSON Web Tokens (JWT).
- **Frontend**:
  - Separate login and registration pages for Admin and Employee.
  - Intuitive and responsive design using AngularJS.
- **Backend**:
  - Spring Boot-based RESTful API.
  - Secure handling of user authentication and authorization.
- **Database**: PostgreSQL with a well-structured schema for employees and roles.

## Technologies Used
- **Frontend**: AngularJS
- **Backend**: Spring Boot
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Token)

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Java (JDK 8 or later)
- PostgreSQL database
- Maven (for Spring Boot)

### Frontend Setup
1. Navigate to the frontend folder:
  ```cd frontend```
   
2. Install dependencies:
  ```npm install```

3. Start the development server:
  ```ng serve```
Access the application at http://localhost:4200.

### Backend Setup
1. Navigate to the backend folder:
  ```cd backend```
Update the application.properties file with your PostgreSQL credentials.

2. Build and run the application:
  ```mvn spring-boot:run```
The backend will be available at http://localhost:8080.

3. Database Setup
Create a PostgreSQL database:
  ```CREATE DATABASE employee_management;```
Update the database schema by running the provided scripts or letting Hibernate handle it.

### Usage
- Admins can log in to manage employees and view all system data.
- Employees can log in to view and update their profiles.
- Access restricted areas depending on user roles.
  
