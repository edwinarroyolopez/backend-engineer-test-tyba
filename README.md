# Backend Engineer Test

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
6. ✅ Create Routes
    - ✅ Signup
    - ✅ Login
    - ✅ logout
    - ✅ Get restaurants
    - ✅ Get logs
8. ✅ Create postman collection
9. ⬜️ Controllers
    - ✅ Create Controllers
    - ✅ Connect Routes with Controllers
        * ✅ SessionController
        * ✅ UsersController
        * ✅ RestaurantsController
        * ✅ LogsController
10. ⬜️  Models
    - ✅  Create models
    - ✅ Connect Controllers with Models
        * ✅ SessionModel
        * ✅ UsersModel
        * ✅ RestaurantsModel
        * ✅ LogsModel
11. Connect with an api to get Restaurants
12. Connect Models with db
13. ⬜️ Unit test
    - ✅ Mount structure
    - ✅ Unit test can be run
    - ⬜️ Session.test
    - ⬜️ Users.test
    - ⬜️ Restaurants.test
    - ⬜️ Logs.test

## __Status task__
⬜️ Pending
✅ Ready
❌ Fail
🕒 Progress
⭐️ _Difficulty Level_


[comment]: <> (Sources readme)
[1]:https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-1/107800951_3061159633962395_886217213345086584_n.png?stp=dst-png_p148x148&_nc_cat=101&ccb=1-5&_nc_sid=1eb0c7&_nc_eui2=AeGigQfDMoENaCpINbK8Z-gg18wthNFdaSXXzC2E0V1pJfDDqVooa7gG0mGZo3WR9YSCp80oz4jSGzeztvyp20kU&_nc_ohc=x8XYgestwLoAX9-SFJl&_nc_ht=scontent-bog1-1.xx&oh=00_AT-vxavQCU-hwDhH7BmSwum26GLPYe6F8ygYL55CzsJn3w&oe=626FA8D5