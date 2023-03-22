# CRUD API (Node.js) 📬

The CRUD API project allows clients to perform CRUD operations on a database of users. Specifically, clients can create new users, retrieve user by id, update users, and delete users from the database

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
