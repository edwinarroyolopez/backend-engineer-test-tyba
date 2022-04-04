# Backend Engineer Test

```node --version v13.14.0```

## To Run
- ```npm i```
- ```npm start```
- Open in your browser ```http://localhost:6001```

## To Run Unit Test
- ```npm run test```

## Routes

- ```http://localhost:6001/signup```
- ```http://localhost:6001/login```
- ```http://localhost:6001/logout```
- ```http://localhost:6001/get-restaurants```
- ```http://localhost:6001/get-users```
- ```http://localhost:6001/logs/userId```
- ```http://localhost:6001/logs```


## Postman collection
![][1]

`docs/Backend-engineer-tyba.postman_collection.json`: Postman collection route
## Folder Structure
`src/routes` : All coding and functions related endpoints.

`src/interfaces` : Interfaces to ts.

`src/controllers` : All coding and functions related controllers.

`src/models` : All coding and functions related models.

`src/utils` : All coding and functions related utils.

`src/database` : Conexion to database

`test` : All coding and functions related unit test.

`docs` : All about documentation

## **General** **tasks**
1. ✅ Create a repository
2. ✅ Install dependencies
3. ✅ Create a server with express
4. ✅ Utils 
    - ✅ Handler Logs
    - ✅ Interfaces
    - ✅ Generate tokes
5. ✅ Create Routes
    - ✅ Signup
    - ✅ Login
    - ✅ logout
    - ✅ Get restaurants
    - ✅ Get logs
6. ✅ Create postman collection
7. ✅ Controllers
    - ✅ Create Controllers
    - ✅ Connect Routes with Controllers
        * ✅ SessionController
        * ✅ UsersController
        * ✅ RestaurantsController
        * ✅ LogsController
8. ✅  Models
    - ✅  Create models
    - ✅ Connect Controllers with Models
        * ✅ SessionModel
        * ✅ UsersModel
        * ✅ RestaurantsModel
        * ✅ LogsModel
9. ✅ Connect with a maps api to get Restaurants
    - ✅ Add Colombia locations
    - ✅ Make a test search Restaurants
    - ✅ Make a test search by lat, lng and city Restaurants ⭐️ ⭐️
10. ✅ Connect Models with db
    - ✅ Create a public db
    - ✅ Create tables
        * ✅ Users table
        * ✅ Logs table
11. ✅ Database Operations
    - ✅ Create user
    - ✅ Find user to login
    - ✅ Find all users
    - ✅ Create a Log
    - ✅ Create a Log to Logout
    - ✅ Create a Log to Map Search
    - ✅ Find logs
12. ✅ Use Auth with token
    - ✅ Send token in headers
    - ✅ Public routes
        - ✅ login
    - ✅ Private routes
13. ✅ Logout Logic ⭐️ ⭐️ ⭐️ 
14. ✅ Set token as global var in postman
15. ❌ Send email or sms signup
    - ❌ email
    - ❌ sms
15. ✅ Unit test
    - ✅ Mount structure
    - ✅ Unit test can be run
    - ✅ Session.test
    - ✅ Users.test
    - ✅ Restaurants.test
    - ✅ Logs.test
16. ❌ DataStudio Reports

## __Status task__
⬜️ Pending
✅ Ready
❌ Fail
🕒 Progress
⭐️ _Difficulty Level_


[comment]: <> (Sources readme)
[1]:https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-1/107800951_3061159633962395_886217213345086584_n.png?stp=dst-png_p148x148&_nc_cat=101&ccb=1-5&_nc_sid=1eb0c7&_nc_eui2=AeGigQfDMoENaCpINbK8Z-gg18wthNFdaSXXzC2E0V1pJfDDqVooa7gG0mGZo3WR9YSCp80oz4jSGzeztvyp20kU&_nc_ohc=x8XYgestwLoAX9-SFJl&_nc_ht=scontent-bog1-1.xx&oh=00_AT-vxavQCU-hwDhH7BmSwum26GLPYe6F8ygYL55CzsJn3w&oe=626FA8D5