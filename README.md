# SevenSenses

**SevenSenses** is a comprehensive yoga education platform designed to deliver a dynamic and interactive learning experience for users interested in yoga. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform facilitates seamless course management and user engagement.

## Demo Video

Watch the project demo video here: [SevenSenses Demo](https://drive.google.com/file/d/1Zl0nxV9m6_-VRBGaiJo2peNBfTcgOica/view?usp=drive_link)

## Project Description

SevenSenses aims to provide:
- An engaging learning experience with a variety of yoga courses.
- A platform for instructors to share their expertise and interact with students.
- A user-friendly interface for easy navigation and course management.

## System Architecture

SevenSenses is structured into three main components: front-end, back-end, and database. The platform operates on a client-server architecture where the front-end interacts with users, and the back-end manages data processing and storage.

### Front-end

The front-end is developed using React.js, providing a responsive and intuitive user interface. Key features include:
- **Homepage**: Introduction to the platform with links to course lists and user profiles.
- **Course List**: Displays available courses with descriptions and ratings.
- **Course Details**: Includes course content and related materials.
- **User Management**: Allows users to view and edit their profiles and manage their course enrollments.

### Back-end

The back-end is built using Node.js and Express.js, offering robust support for:
- **User Authentication and Authorization**: Secure login and registration, including OTP verification and password management.
- **Course Management**: CRUD operations for courses, media management, and user interactions.
- **Payment Integration**: Course purchases handled through Razorpay.

### Database

MongoDB is used for flexible data storage, supporting:
- **Course Content**: Videos, images, and PDFs.
- **User Data**: Details for students and instructors.

## Front-end Details

The front-end is designed using Figma for a clean, user-friendly interface. Frameworks and libraries include:
- **React.js**: For dynamic UI components.
- **Tailwind CSS**: For responsive design.
- **Redux**: For state management.

## Back-end Details

Features and functionalities include:
- **Node.js and Express.js**: For server-side logic and API management.
- **MongoDB**: For flexible data handling.
- **JWT and Bcrypt**: For secure user authentication.
- **Cloudinary**: For media management.

## API Design

The API follows RESTful principles and includes the following endpoints:

- **/api/auth/signup (POST)**: Create a new user account.
- **/api/auth/login (POST)**: Log in and generate a JWT token.
- **/api/auth/verify-otp (POST)**: Verify the OTP sent to the user's email.
- **/api/auth/forgot-password (POST)**: Send a password reset link to the registered email.
- **/api/courses (GET)**: Get a list of all available courses.
- **/api/courses/:id (GET)**: Get details of a specific course by ID.
- **/api/courses (POST)**: Create a new course.
- **/api/courses/:id (PUT)**: Update an existing course by ID.
- **/api/courses/:id (DELETE)**: Delete a course by ID.
- **/api/courses/:id/rate (POST)**: Add a rating to a course.

SevenSenses is designed to offer a comprehensive and interactive yoga education experience. With robust features and a user-friendly interface, it aims to meet the needs of both students and instructors, with future enhancements planned to further improve the platform.



