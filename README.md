# TaskForge

TaskForge is a powerful task management application designed to help you stay organized and productive. With TaskForge, you can easily create, organize, and track your tasks, ensuring nothing falls through the cracks.

## Features

- **User Authentication**: Securely sign up and log in to TaskForge to access your tasks.
- **Task Management**: Create, update, delete, and mark tasks as completed with ease.
- **Task Categories**: Organize your tasks into different categories or projects for better management.
- **Dashboard**: Get an overview of your tasks with a personalized dashboard displaying upcoming tasks, completed tasks, and more.
- **Search and Filter**: Quickly find specific tasks using the search and filter functionalities.
- **Notifications**: Receive reminders for upcoming tasks or overdue tasks via email or in-app notifications.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Heroku (backend), Netlify (frontend), MongoDB Atlas (database)

## Getting Started

To get started with TaskForge, follow these steps:

1. Clone the repository:

git clone https://github.com/Arianna-Mireles/P3_TaskForge.git

2. Navigate to the project directory:

cd Milestone-Project-3

3. Install dependencies:

npm install

4. Set up environment variables:
- Create a `.env` file in the root directory.
- Add the following environment variables:
  ```
  PORT=3000
  MYSQL_HOST=<your-mysql-host>
  MYSQL_USER=<your-mysql-user>
  MYSQL_PASSWORD=<your-mysql-password>
  MYSQL_DATABASE=TaskForge
  JWT_SECRET=<your-jwt-secret>
  ```
5. Start the development server:

