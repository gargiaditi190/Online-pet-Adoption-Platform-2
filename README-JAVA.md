# Online Pet Adoption Platform - Java Servlet Edition

This is a Java-based web application for managing pet adoptions, built using **Java Servlets**, **JDBC**, and **JSP**.

## Technology Stack

- **Backend**: Java Servlets
- **Database**: MySQL with JDBC
- **Frontend**: JSP (JavaServer Pages)
- **Server**: Apache Tomcat 9.0+
- **Build Tool**: Maven (recommended)

## Project Structure

\`\`\`
online-pet-adoption/
├── src/
│   └── com/
│       └── petadoption/
│           ├── model/          # Data models (Pet, User, Application)
│           ├── dao/            # Data Access Objects (JDBC operations)
│           ├── servlets/       # Servlet controllers
│           └── util/           # Utility classes (Database connection)
├── webapp/
│   ├── WEB-INF/
│   │   ├── web.xml            # Servlet configuration
│   │   └── views/             # JSP pages
│   └── css/                   # Stylesheets
├── database/
│   ├── schema.sql             # Database schema
│   └── seed.sql               # Sample data
└── README-JAVA.md
\`\`\`

## Core Java Concepts Used

### 1. **Object-Oriented Programming (OOP)**
- **Encapsulation**: Model classes (Pet, User, Application) with private fields and public getters/setters
- **Inheritance**: All servlets extend HttpServlet
- **Polymorphism**: Overriding doGet() and doPost() methods

### 2. **Collections Framework**
- Using `ArrayList<>` for storing lists of pets and applications
- Iterating through collections in DAO classes

### 3. **Exception Handling**
- Try-catch blocks for SQLException handling
- Custom error messages and logging

### 4. **JDBC (Java Database Connectivity)**
- Connection management with DriverManager
- PreparedStatement for SQL injection prevention
- ResultSet for query results
- Transaction management

## Database Integration (JDBC)

### Connection Management
\`\`\`java
// DatabaseConnection.java handles all connections
Connection conn = DatabaseConnection.getConnection();
\`\`\`

### CRUD Operations
- **Create**: `insertPet()`, `insertUser()`, `insertApplication()`
- **Read**: `getPetById()`, `getAllPets()`, `getUserByEmail()`
- **Update**: `updatePet()`, `updateApplicationStatus()`
- **Delete**: `deletePet()`

### PreparedStatement (SQL Injection Prevention)
\`\`\`java
PreparedStatement stmt = conn.prepareStatement("SELECT * FROM pets WHERE id = ?");
stmt.setInt(1, petId);
\`\`\`

## Servlets & Web Integration

### Servlet Mapping (web.xml)
Each servlet is mapped to a URL pattern:
- `/home` → HomeServlet
- `/browse` → BrowsePetsServlet
- `/pet` → PetDetailServlet
- `/apply` → AdoptionApplicationServlet
- `/dashboard` → UserDashboardServlet
- `/admin` → AdminDashboardServlet
- `/login` → LoginServlet
- `/register` → RegisterServlet
- `/logout` → LogoutServlet

### Request/Response Handling
\`\`\`java
protected void doGet(HttpServletRequest request, HttpServletResponse response)
protected void doPost(HttpServletRequest request, HttpServletResponse response)
\`\`\`

### Session Management
\`\`\`java
HttpSession session = request.getSession();
session.setAttribute("user", user);
\`\`\`

### Request Dispatching
\`\`\`java
request.getRequestDispatcher("/WEB-INF/views/home.jsp").forward(request, response);
\`\`\`

## Setup Instructions

### 1. Database Setup
\`\`\`sql
-- Run schema.sql to create tables
mysql -u root -p < database/schema.sql

-- Run seed.sql to insert sample data
mysql -u root -p < database/seed.sql
\`\`\`

### 2. Configure Database Connection
Edit `src/com/petadoption/util/DatabaseConnection.java`:
\`\`\`java
private static final String JDBC_URL = "jdbc:mysql://localhost:3306/pet_adoption";
private static final String JDBC_USER = "your_username";
private static final String JDBC_PASSWORD = "your_password";
\`\`\`

### 3. Add MySQL Connector
Download MySQL Connector/J and add to your project's lib folder or Maven dependencies:
\`\`\`xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
</dependency>
\`\`\`

### 4. Deploy to Tomcat
1. Build the project as a WAR file
2. Copy to Tomcat's `webapps` directory
3. Start Tomcat server
4. Access at `http://localhost:8080/pet-adoption/`

## Features

### User Features
- Browse available pets with filtering
- View detailed pet information
- Submit adoption applications
- Track application status in dashboard
- User registration and login

### Admin Features
- Manage pet listings (add, edit, delete)
- Review adoption applications
- Approve/reject applications
- View statistics and reports

## Security Considerations

**⚠️ Important**: This is a demonstration project. For production use:

1. **Password Hashing**: Implement BCrypt or similar
\`\`\`java
// Use BCrypt instead of plain text passwords
String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
\`\`\`

2. **SQL Injection**: Already using PreparedStatement ✓

3. **Session Security**: Add HTTPS and secure cookies

4. **Input Validation**: Validate all user inputs

5. **Authentication Filter**: Create a filter for protected pages

## Default Credentials

- **Admin**: admin@petadopt.com / admin123
- **User**: john.doe@email.com / password123

## API Endpoints

| URL | Method | Description |
|-----|--------|-------------|
| `/home` | GET | Home page |
| `/browse` | GET | Browse pets |
| `/browse?type=Dog` | GET | Filter by type |
| `/pet?id=1` | GET | Pet details |
| `/apply?petId=1` | GET | Application form |
| `/apply` | POST | Submit application |
| `/login` | GET/POST | User login |
| `/register` | GET/POST | User registration |
| `/dashboard` | GET | User dashboard |
| `/admin` | GET/POST | Admin dashboard |
| `/logout` | GET | User logout |

## Learning Objectives Achieved

✅ **Problem Understanding & Solution Design**
- MVC architecture implementation
- Database schema design
- User flow and navigation

✅ **Core Java Concepts**
- OOP principles (Encapsulation, Inheritance, Polymorphism)
- Collections (ArrayList, List interface)
- Exception handling (try-catch, SQLException)
- JDBC operations

✅ **Database Integration (JDBC)**
- Connection management
- CRUD operations
- PreparedStatement usage
- ResultSet handling

✅ **Servlets & Web Integration**
- Servlet lifecycle (init, doGet, doPost)
- Request/response handling
- Session management
- Request dispatching to JSP
- web.xml configuration

## Future Enhancements

- Add JSP pages for frontend views
- Implement image upload for pets
- Add email notifications
- Implement search functionality
- Add pagination for large datasets
- Create REST API endpoints
- Add unit tests (JUnit)

## License

Educational project for learning Java web development concepts.
