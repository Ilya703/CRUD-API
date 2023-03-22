# CRUD API (Node.js) 📬

The Marvel project is a React application that uses the Marvel API to provide a database of Marvel Comics characters and their information, such as their name, description, and image

### ⭐ Application features: 

* GET-request

  * `/api/users` - get all users from database

  * `/api/users/{id}` -  to get user by id

* POST-request

  * `/api/create-user` - to create a new user, you need to provide username, age and hobbies in JSON format

    Example: 

    ```
    {
        "username": "Jay",
        "age": "25",
        "hobbies": "['swimming', 'dancing']"
    }
    ```

* PUT-request

  * `/api/replace-user/{id}` - to replace user by id with new data, you need to provide username, age and hobbies in JSON format

    Example: 

    ```
      {
          "username": "Jane",
          "age": "27",
          "hobbies": "['singing']"
      }
     ```

* DELETE-request

  * `/api/delete-user/{id}` -  to delete user by id

### 🔑 Configuration (optional)

Create `.env` file inside env directory and add PORT value to it

Example:

```
PORT=3000
```

### 🚀 Installation

1. Clone the repository:

```cmd
git clone https://github.com/Ilya703/CRUD-API.git
```

2. Install the dependencies:

```cmd
npm install
```

3. Start the application:

```
npm run start:dev   (to run application in development mode)

npm run start:prod   (to run application in production mode)
```

### 🛠️ Built With:

* JavaScript
* Node.js
