# TaskManagement-Angular
This is a SoftUni Angular project for creating, joining teams, managing tasks and comments. 
Users may register which allows them to create, edit and delete their own teams. They can also join other teams, see participants in their teams at any time and create different tasks, and comments for every task.
Guests can see only the last 3 teams.

# Tech Stack
- SoftUni Practice Server
- Angular for the client-side
- TypeScript, HTML, CSS
- Observables, Subjects, Pipes, Interceptors
- Validation and error handling

# Key Features
Team Management:
- Create, update, delete teams and view team details
- Join other teams using a specific team key
- See participants in their own teams
- View and manage all personal teams in a separete page
- View the last three created teams
- Search for specific teams

Task Management:
- Create, update, delete tasks and view task details
- Filter tasks by their progress
- View and manage all personal tasks in a separete page

Comment Management:
- Create, update, delete comments

# How to run
SoftUni Practice Server 
- Navigate to server folder - cd server
- Run the server - node server.js

The application
- Navigate to client (task-management) folder - cd task-management
- Install all needed packages - npm install 
- Run the application - npm start 